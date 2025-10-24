import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <h2 className="card-title">Page Not Found</h2>
      <button className="btn" onClick={() => navigate('/')}>Back Home Page</button>
    </div>
  )
}
