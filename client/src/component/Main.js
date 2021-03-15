import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import '../App.css'

export default function Main() {
    return (
        <>
            <div className="navigation-header">
                <div className="navigator red"></div>
                <div className="navigator yellow"></div>
                <div className="navigator green"></div>
            </div>
            <About />
            <Projects />
            <Contact />
        </>
    )
}
