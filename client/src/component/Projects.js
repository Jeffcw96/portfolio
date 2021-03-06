import React, { useState, useEffect } from 'react'
import Project from './Project'
import ProjectDetailsModal from './ProjectDetailsModal'
import projects from '../static/data/projects.json'

export default function Projects({ projectsRef }) {
    const [modal, setModal] = useState(false)
    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    return (
        <div className="projects-section" ref={projectsRef}>
            <h2 className="section-header">Projects</h2>
            <div className="flex flex-wrap mw95-center mt-50">
                {projects.map((project, ind) => (
                    <div className="project-showcase" key={ind}>
                        <Project project={project} openModal={openModal} />
                    </div>
                ))}
            </div>
            <ProjectDetailsModal active={modal} closeModal={closeModal} />
        </div>
    )
}
