// src/pages/RuleSettings.js
import React, { useEffect, useState } from 'react'

function Rules () {
  const [rules, setRules] = useState([])
  const [form, setForm] = useState({ name: '', description: '', severity: '' })

  useEffect(() => {
    fetch('http://localhost:5000/api/rules')
      .then(res => res.json())
      .then(data => setRules(data))
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    await fetch('http://localhost:5000/api/rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setForm({ name: '', description: '', severity: '' })
    // Refresh rules list
    fetch('http://localhost:5000/api/rules')
      .then(res => res.json())
      .then(data => setRules(data))
  }

  return (
    <div>
      <h1>Rules</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Rule Name' value={form.name} onChange={handleChange} required /><br />
        <input name='description' placeholder='Description' value={form.description} onChange={handleChange} required /><br />
        <input name='severity' placeholder='Severity' value={form.severity} onChange={handleChange} required /><br />
        <button type='submit'>Add Rule</button>
      </form>
      <ul>
        {rules.map((rule, i) => (
          <li key={i}>
            <b>{rule.name}</b> ({rule.severity}): {rule.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Rules
