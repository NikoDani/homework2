import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Project overview — short description here.',
    github: 'https://github.com/NikoDani/homework2', 
    vercel:'https://homework2-taupe.vercel.app/'
  },
  {
    id:2,
    title:'Project Two',
    description: 'Project overview — short description here.',
    github: 'https://github.com/NikoDani/homework2',
    vercel: 'https://homework2-taupe.vercel.app/'
  },
  {
    id:3,
    title: 'Project Three',
    description: 'Project overview — short description here.',
    github:'https://github.com/NikoDani/homework2',
    vercel:'https://homework2-taupe.vercel.app/'
  }
]

export default function Projects() {
  return (
    <div className="card">
      <h2 className="card-title">Projects</h2>

      <div className="projects-list">
        {projects.map(p => (
          <div className="project-item" key={p.id}>
            <div className="project-left">
            </div>
            <div className="project-right">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="links-row">
                <a className="btn-link" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn-link" href={p.vercel} target="_blank" rel="noreferrer">Vercel</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
