import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Project({ project }) {
    const history = useHistory()
    const defaultImg = require("../static/data/showcase/" + project.img).default
    // const hoverImg = require("../static/data/showcase/" + project.hoverImg).default
    const [hover, setHover] = useState(false)

    return (
        <div className="flex flex-column space-between transition-fade" >
            <div className={`projects-img-container ${hover ? 'hover-active' : null}`}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}>
                <img src={defaultImg} />
                <div class="on-hover-project-container">
                    <div className="project-hover-detail-container-left">
                        <div className="project-hover-detail-left"
                            onClick={() => history.push({
                                pathname: "/project/" + project.id
                            })}>Learn</div>
                    </div>
                    <div className="project-hover-detail-container-right">
                        <div className="project-hover-detail-right"
                            onClick={() => history.push({
                                pathname: "/project/" + project.id
                            })}>More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
