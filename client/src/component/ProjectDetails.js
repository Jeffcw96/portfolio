import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'


export default function ProjectDetails({ match }) {
    let slides = []
    const projectId = match.params.id
    const projectInfo = require("../static/data/projects/" + projectId + "/project.json");
    const projectImages = projectInfo.images.map(image => {
        return require("../static/data/projects/" + projectId + "/images/" + image).default
    })

    console.log("projectImages", projectImages)

    for (let i = 0; i < projectImages.length; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={projectImages[i]} alt={`Slide image ${i}`} style={{ width: '100%' }} />
            </SwiperSlide>
        )
    }

    console.log("projectImages", projectImages)
    console.log("projectInfo", projectInfo)
    // const defaultImg = require("../static/data/projects/" +projectId).default
    // const hoverImg = require("../static/data/showcase/" + project.hoverImg).default
    console.log("match", match)
    return (
        <div className="project-detail-page" style={{ maxWidth: '800px' }}>
            <Swiper id="main">{slides}</Swiper>
        </div>
    )
}
