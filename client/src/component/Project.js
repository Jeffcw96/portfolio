import React, { useState } from 'react'
import { useProjectDetails } from '../context/ProjectDetailsProvider'

export default function Project({ project, openModal }) {

    const defaultImg = require("../static/data/showcase/" + project.img).default
    // const hoverImg = require("../static/data/showcase/" + project.hoverImg).default
    const [hover, setHover] = useState(false)
    const { setProjectId } = useProjectDetails()

    function openProjectModal(projectId) {
        setProjectId(projectId);
        openModal();
    }

    return (
        <div className="flex flex-column space-between transition-fade" >
            <div className={`projects-img-container ${hover ? 'hover-active' : null}`}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}>
                <img src={defaultImg} />
                <div className="on-hover-project-container">
                    <div className="project-hover-detail-container-left">
                        <div className="project-hover-detail-left"
                            onClick={() => openProjectModal(project.id)}>Learn</div>
                    </div>
                    <div className="project-hover-detail-container-right">
                        <div className="project-hover-detail-right"
                            onClick={() => openProjectModal(project.id)}>More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
