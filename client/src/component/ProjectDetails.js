import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import backIcon from '../static/images/back-arrow.svg'
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
export default function ProjectDetails({ match }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let slides = [];
    let thumbs = []
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
        thumbs.push(
            <SwiperSlide key={`thumbs-${i}`}>
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
        <div className="project-detail-page">
            <div style={{ textAlign: 'center' }}>
                <h1>{projectInfo.projectName}</h1>
            </div>
            <div className="project-detail-slider-container" style={{ display: "flex" }}>
                <div className="to-home-page-icon">
                    <Link to={"/#projects"}>
                        <img src={backIcon} alt={"to previous page"} />
                    </Link>
                </div>
                <Swiper
                    id="thumbs"
                    direction="vertical"
                    spaceBetween={5}
                    slidesPerView={5}
                    onSwiper={setThumbsSwiper}
                    style={{ width: '15%', marginRight: "15px" }}
                >
                    {thumbs}
                </Swiper>
                <Swiper
                    id="main"
                    autoplay={{ delay: 4000 }}
                    thumbs={{ swiper: thumbsSwiper }}
                    tag="section"
                    wrapperTag="ul"
                    navigation
                    pagination
                    spaceBetween={0}
                    slidesPerView={1}
                    onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                    onSlideChange={(swiper) => {
                        console.log('Slide index changed to: ', swiper.activeIndex);
                    }}
                    onReachEnd={() => console.log('Swiper end reached')}
                    style={{ width: '85%' }}
                >
                    {slides}
                </Swiper>
            </div>
        </div>

    )
}
