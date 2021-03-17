import React from 'react'
import Project from './Project'
import projects from '../static/data/projects.json'

export default function Projects({ projectsRef }) {
    return (
        <div className="projects-section" ref={projectsRef}>
            <h2 className="section-header">Projects</h2>
            <div className="flex flex-wrap space-between">
                {projects.map((project, ind) => (
                    <div className="project-showcase">
                        <Project project={project} />
                    </div>
                ))}
            </div>

        </div>
    )
}
