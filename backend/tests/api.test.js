const request = require('supertest')
const app = require('../server')

describe('API Endpoints', () => {
  it('GET /api/results should return array', async () => {
    const res = await request(app).get('/api/results')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/results should create result', async () => {
    const payload = {
      line: 1,
      rule: 'no-console',
      severity: 'High',
      description: 'Unexpected console statement',
      project: 'Test Project'
    }
    const res = await request(app).post('/api/results').send(payload)
    expect(res.statusCode).toBe(200)
    expect(res.body.rule).toBe('no-console')
  })
})
