import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register () {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (res.ok) {
      navigate('/login')
    } else {
      setError(data.error)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' placeholder='Email' value={form.email} onChange={handleChange} required /><br />
        <input name='password' type='password' placeholder='Password' value={form.password} onChange={handleChange} required /><br />
        <button type='submit'>Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Register
