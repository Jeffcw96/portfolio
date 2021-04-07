import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import backIcon from '../static/images/back-arrow.svg'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
export default function ProjectDetails({ match }) {
    const history = useHistory()
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
            <SwiperSlide key={`slide-${i}`} style={{ display: "flex", alignItems: "center" }}>
                <img src={projectImages[i]} alt={`Slide image ${i}`} style={{ width: '100%' }} />
            </SwiperSlide>
        )
        thumbs.push(
            <SwiperSlide key={`thumbs-${i}`}>
                <img src={projectImages[i]} alt={`Slide image ${i}`} style={{ width: '100%' }} />
            </SwiperSlide>
        )
    }

    function toProjectsSection(e) {
        e.preventDefault()
        history.push({
            pathname: '/',
            state: 'project'
        })
    }


    return (
        <div className="project-detail-page">
            <Helmet>
                <link rel="prefetch" href={projectInfo.slug} />
            </Helmet>
            <div style={{ textAlign: 'center' }}>
                <h1>{projectInfo.projectName}</h1>
            </div>
            <div className="project-detail-slider-container" style={{ display: "flex" }}>
                <div className="to-home-page-icon">
                    <a href="javascript;" onClick={(e) => toProjectsSection(e)}>
                        <img src={backIcon} alt={"to previous page"} />
                    </a>
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
            <div className="project-detail-descriptions-container">
                <div className="project-detail-component"><span>Descriptions :</span><span>{projectInfo.description}</span></div>
                <div className="project-detail-component" ><span>Tags :</span>
                    <div >
                        {projectInfo.tags.map(tagInfo => (
                            <span className="project-detail-tag" style={{ backgroundColor: tagInfo.backgroundColor, color: tagInfo.color }}>{tagInfo.tag}</span>
                        ))}
                    </div>
                </div>
                <div className="project-detail-component"><span>Conclusions : </span><span>{projectInfo.conclusion}</span></div>
                <div className="project-detail-component"><span>Demo at : </span><a href={projectInfo.slug} target="_blank">{projectInfo.slug}</a></div>
            </div>
        </div>

    )
}
