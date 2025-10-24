import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'

const hobbyData = {
  chess: {
    title:'Playing Chess',
    text: 'Random text why you like this hobby, how often you do it and etc.'
  },
  reading: {
    title:'Reading Books',
    text:'Random text about reading — what you like, favorite genres and how often.'
  },
  soccer: {
    title: 'Playing Soccer',
    text: 'Random text about playing soccer — how often, team or alone, and why.'
  },
  watching: {
    title: 'Watching Movies',
    text: 'Random text about watching movies and favorite genres.'
  }
}

export default function HobbyDetail() {
  const { id} = useParams()
  const navigate = useNavigate()
  const hobby = hobbyData[id]

  if (!hobby) {
    return (
      <div className="card">
        <h2 className="card-title">Hobby</h2>
        <p>Hobby not found.</p>
        <button className="btn" onClick={() => navigate('/hobby')}>Back</button>
      </div>
    )
  }

  return (
    <div className="card">
      <button className="back-btn" onClick={() => navigate('/hobby')}>← Back</button>
      <h2 className="card-title">{hobby.title}</h2>
      <p className="muted">{hobby.text}</p>
    </div>
  )
}
