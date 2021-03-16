import React from 'react'
import Typewriter from 'typewriter-effect'
import profilePic from '../static/profile.png'

export default function About({ aboutRef }) {
    return (
        <div className="about-page flex align-center" ref={aboutRef}>
            <div className="typewriting-text flex space-between align-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, My name is Jeff Chang<br/>I'm working as a software engineer<br/><br/>")
                            .pauseFor(1000)
                            .typeString("I'm always looking for new technology stack and trying<br/>them out in a project.<br/>")
                            .typeString("Do checkout some projects I've done during my free time below!")
                            .start();
                    }}
                    options={{
                        delay: 50
                    }}
                />
                <div>
                    <img src={profilePic} className="profile-pic" alt="profile picture" />
                </div>
            </div>
        </div>
    )
}
