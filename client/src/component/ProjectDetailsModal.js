import React, { useState, useEffect } from 'react'
import { useProjectDetails } from '../context/ProjectDetailsProvider'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import backIcon from '../static/images/back-arrow.svg'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
export default function ProjectDetailsModal({ active, closeModal }) {
    const { projectDetailsInfo, projectDetailsImages } = useProjectDetails();
    let slides = [];
    console.log("projectDetailsInfo", projectDetailsInfo, 'projectDetailsImage', projectDetailsImages)
    console.log("activeee", active)

    if (projectDetailsImages !== null && projectDetailsImages.length !== 0) {
        for (let i = 0; i < projectDetailsImages.length; i++) {
            slides.push(
                <SwiperSlide key={`slide-${i}`} style={{ display: "flex", alignItems: "center" }}>
                    <img src={projectDetailsImages[i]} alt={`Slide image ${i}`} style={{ width: '100%' }} />
                </SwiperSlide>
            )
        }
    }





    return (
        <div id="myModal" className={`modal ${active ? 'active' : ''}   `}>
            <div className="modal-content">
                <div className="flex space-between" style={{ alignItems: 'center' }}>
                    <h3>Title</h3>
                    <div className="close" onClick={closeModal}>&times;</div>
                </div>
                {
                    projectDetailsInfo !== null ?
                        <div className="project-detail-page">
                            <Helmet>
                                <link rel="prefetch" href={projectDetailsInfo.slug} />
                            </Helmet>
                            <div style={{ textAlign: 'center' }}>
                                <h1 className='project-detail-title'>{projectDetailsInfo.projectName}</h1>
                            </div>
                            <div className="project-detail-slider-container" style={{ display: "flex" }}>
                                <Swiper
                                    id="main"
                                    autoplay={{ delay: 4000 }}
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
                                    style={{ width: '90%' }}
                                >
                                    {slides}
                                </Swiper>
                            </div>
                            <div className="project-detail-descriptions-container">
                                <div className="project-detail-component"><span>Descriptions :</span>
                                    <span>{projectDetailsInfo.descriptions.map(description => (
                                        <div style={{ marginBottom: "5px" }}>{description}</div>
                                    ))}</span>
                                </div>
                                <div className="project-detail-component" ><span>Tags :</span>
                                    <div className="project-tag-container">
                                        {projectDetailsInfo.tags.map(tagInfo => (
                                            <span className="project-detail-tag" style={{ backgroundColor: tagInfo.backgroundColor, color: tagInfo.color }}>{tagInfo.tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-detail-component"><span>Demo at : </span><a href={projectDetailsInfo.slug} target="_blank">{projectDetailsInfo.slug}</a></div>
                                <div className="project-detail-component"><span>Source code : </span><a href={projectDetailsInfo.source} target="_blank">{projectDetailsInfo.source}</a></div>
                            </div>
                        </div> :
                        ""
                }


            </div>
        </div>
    )
}
