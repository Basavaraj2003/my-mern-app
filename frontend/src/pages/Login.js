import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login () {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (res.ok) {
      localStorage.setItem('token', data.token)
      navigate('/') // Redirect to dashboard or main page
    } else {
      setError(data.error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' placeholder='Email' value={form.email} onChange={handleChange} required /><br />
        <input name='password' type='password' placeholder='Password' value={form.password} onChange={handleChange} required /><br />
        <button type='submit'>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login
