import React from 'react'
import { Link } from "react-router-dom";

const hobbies = [
  { id: 'chess', title: 'Playing Chess' },
  { id: 'reading', title: 'Reading Books' },
  { id: 'soccer', title: 'Playing Soccer' },
  { id: 'watching', title: 'Watching Movies' },
];

export default function Hobby() {
  return (
    <div className="card">
      <h2 className="card-title">My Hobbies</h2>

      <div className="projects-list">
        {hobbies.map(h => (
          <Link key={h.id} to={`/hobby/${h.id}`} className="project-item">
            <div className="project-left">
              
            </div>
            <div className="project-right">
              <h3>{h.title}</h3>
              <p className="muted">Click to read more about this hobby.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
