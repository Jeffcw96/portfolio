import React, { useRef, useState } from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import '../App.css'

export default function Main() {
    const [navbar, setNavbar] = useState(false)
    const aboutRef = useRef()
    const projectsRef = useRef()
    const contactRef = useRef()

    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavColor)

    return (
        <>
            <div className={navbar ? 'navigation-header active' : 'navigation-header'}>
                <ul className="navigation-container">
                    <li onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About Me</li>
                    <li onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
                    <li onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
                </ul>
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </>
    )
}
