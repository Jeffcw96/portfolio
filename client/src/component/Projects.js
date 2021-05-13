import React from 'react'
import Project from './Project'
import ProjectDetailsModal from './ProjectDetailsModal'
import projects from '../static/data/projects.json'

export default function Projects({ projectsRef }) {
    return (
        <div className="projects-section" ref={projectsRef}>
            <h2 className="section-header">Projects</h2>
            <div className="flex flex-wrap space-between mw95-center mt-50">
                {projects.map((project, ind) => (
                    <div className="project-showcase" key={ind}>
                        <Project project={project} />
                    </div>
                ))}
            </div>
            <ProjectDetailsModal />
        </div>
    )
}
