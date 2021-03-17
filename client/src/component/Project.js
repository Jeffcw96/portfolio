import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Project({ project }) {
    const history = useHistory()
    const defaultImg = require("../static/data/showcase/" + project.img).default
    const hoverImg = require("../static/data/showcase/" + project.hoverImg).default
    console.log(hoverImg)
    const [img, setImg] = useState(defaultImg)

    return (
        <div className="flex flex-column space-between mh-380">
            <div className="projects-img-container">
                <img src={img} onMouseEnter={() => { setImg(hoverImg) }}
                    onMouseLeave={() => { setImg(defaultImg) }}
                    onClick={() => history.push({
                        pathname: "/project/" + project.id
                    })} />
            </div>
            <div>
                <p style={{ marginBottom: "10px" }} className="roboto-font">{project.projectName}</p>
                <p className="roboto-font light">{project.description}... <br />
                    <Link to={"/project/" + project.id}>
                        Learn more
                    </Link>
                </p>
            </div>
        </div>
    )
}
