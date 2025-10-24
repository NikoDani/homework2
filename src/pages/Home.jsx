import React from 'react'

export default function Home() {
  return (
    <div className="card">
      <h2 className="card-title">Home</h2>
      <div className="home-grid">
        <div className="profile">
          <div className="avatar">👤</div>
          <p className="muted">Water polo Player and 5 dekembreli</p>
        </div>

        <div className="contact">
          <h3>Contact info</h3>
          <p className="muted">github:<span className="placeholder">NikoDani</span></p>
          <p className="muted">email:<span className="placeholder">nikolozjokhadze2009@gmail.com</span></p>
        </div>
      </div>
    </div>
  )
}
