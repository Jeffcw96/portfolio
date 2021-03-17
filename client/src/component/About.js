import React from 'react'
import Typewriter from 'typewriter-effect'
import profilePic from '../static/images/profile.png'

export default function About({ aboutRef }) {
    return (
        <div className="about-page flex align-center" ref={aboutRef}>
            <div className="typewriting-text flex space-between align-center">
                <div className="type-writer-container">
                    <em className="type-writer-body-tag open"> &lt;body&gt;</em>
                    <em className="type-writer-body-tag closed"> &lt;/body &gt;</em>
                    <em className="type-writer-html-tag open"> &lt;html&gt;</em>
                    <em className="type-writer-html-tag closed"> &lt;/html &gt;</em>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hi, My name is Jeff Chang<br/>and I'm a software engineer<br/><br/>")
                                .pauseFor(1000)
                                .typeString("I'm always looking for new technology stack and trying<br/>them out in a project.<br/>")
                                .typeString("Do checkout some projects I've done during my free time below!")
                                .start();
                        }}
                        options={{
                            delay: 50
                        }}
                    />
                </div>
                <div className="profile-pic-container">
                    <img src={profilePic} className="profile-pic" alt="profile picture" />
                </div>
            </div>
        </div>
    )
}
