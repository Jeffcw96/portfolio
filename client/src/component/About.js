import React from 'react'
import Typewriter from 'typewriter-effect'

export default function About() {
    return (
        <div style={{ minHeight: '100vh', background: "black" }}>
            <div className="typewriting-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, My name is Jeff Chang<br/>I'm a developer based in Kuala Lumpur, Malaysia.<br/><br/>")
                            .pauseFor(1000)
                            .typeString("I'm always looking for new technology stack and trying<br/>them out in a project.<br/><br/>")
                            .pauseFor(1000)
                            .typeString("Do checkout some projects I've done during my free time below!")
                            .start();

                    }}
                    options={{
                        delay: 50
                    }}
                />
            </div>
        </div>
    )
}
