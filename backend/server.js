require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AdmZip = require('adm-zip') // npm install adm-zip

// 1. Initialize Express FIRST
const app = express()

// 2. Middleware setup
app.use(cors())
app.use(express.json())
app.use('/reports', express.static(path.join(__dirname, 'reports')))

// 3. MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// 4. Schemas & Models
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
})
const User = mongoose.model('User', userSchema)

const ResultSchema = new mongoose.Schema({
  line: Number,
  rule: String,
  severity: String,
  description: String,
  project: String,
  createdAt: { type: Date, default: Date.now }
})
const RuleSchema = new mongoose.Schema({
  name: String,
  description: String,
  severity: String,
  createdAt: { type: Date, default: Date.now }
})
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  uploadDate: { type: Date, default: Date.now },
  reportPath: String // Path to the HTML report
})
const Result = mongoose.model('Result', ResultSchema)
const Rule = mongoose.model('Rule', RuleSchema)
const Project = mongoose.model('Project', ProjectSchema)

// 5. Auth Routes
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)
  try {
    const user = new User({ email, password: hashed })
    await user.save()
    res.json({ message: 'Registered successfully' })
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: 'Invalid credentials' })
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(400).json({ error: 'Invalid credentials' })
  const token = jwt.sign({ userId: user._id }, 'secretkey')
  res.json({ token })
})

// 6. Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// 7. Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage })

// 8. Project Upload and Scan Endpoint
app.post('/api/projects/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }
  const { name, description } = req.body
  const filePath = req.file.path
  const ext = path.extname(req.file.originalname).toLowerCase()
  const projectDir = path.join(__dirname, 'uploads', `${Date.now()}_${name}`)
  fs.mkdirSync(projectDir, { recursive: true })

  if (ext === '.zip') {
    try {
      const zip = new AdmZip(filePath)
      zip.extractAllTo(projectDir, true)
    } catch (err) {
      return res.status(500).json({ error: 'Failed to unzip project' })
    }
  } else {
    // Move the file to the projectDir
    fs.copyFileSync(filePath, path.join(projectDir, req.file.originalname))
  }

  const reportDir = path.join(__dirname, 'reports', `${Date.now()}_${name}`)
  fs.mkdirSync(reportDir, { recursive: true })

  exec(
    `npx mega-linter-runner --flavor lite --log-level INFO -r ${reportDir} -s ${projectDir}`,
    async (lintErr) => {
      if (lintErr) {
        return res.status(500).json({ error: 'MegaLinter scan failed' })
      }

      const reportPath = path.join(reportDir, 'megalinter-report.html')
      if (!fs.existsSync(reportPath)) {
        return res.status(500).json({ error: 'Report not found' })
      }

      const project = new Project({
        name,
        description,
        reportPath: `/reports/${path.basename(reportDir)}/megalinter-report.html`
      })
      await project.save()

      res.json({ message: 'Project uploaded and scanned!', project })
    }
  )
})

// 9. Data Routes
app.get('/api/results', async (req, res) => {
  res.json(await Result.find())
})
app.post('/api/results', async (req, res) => {
  const result = new Result(req.body)
  await result.save()
  res.json(result)
})

app.get('/api/rules', async (req, res) => {
  res.json(await Rule.find())
})
app.post('/api/rules', async (req, res) => {
  const rule = new Rule(req.body)
  await rule.save()
  res.json(rule)
})

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find().sort({ uploadDate: -1 })
  res.json(projects)
})
app.post('/api/projects', async (req, res) => {
  const project = new Project(req.body)
  await project.save()
  res.json(project)
})

app.get('/api/projects/:id/report', async (req, res) => {
  const project = await Project.findById(req.params.id)
  if (!project) return res.status(404).json({ error: 'Not found' })
  res.json({ reportPath: project.reportPath })
})

// 10. Start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app
