const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// GET /api/reports/latest - returns latest MegaLinter JSON report
router.get('/reports/latest', (req, res) => {
  // Adjust this path if your reports folder is elsewhere
  const reportPath = path.join(__dirname, '../../reports/megalinter-report.json')
  fs.readFile(reportPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading MegaLinter report:', err)
      return res.status(500).json({ error: 'Report not found' })
    }
    try {
      const report = JSON.parse(data)
      res.json(report)
    } catch (parseErr) {
      console.error('Error parsing MegaLinter report:', parseErr)
      res.status(500).json({ error: 'Invalid report format' })
    }
  })
})

module.exports = router
