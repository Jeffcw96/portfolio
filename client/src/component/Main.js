import React, { useRef, useState, useEffect } from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import '../App.css'

function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            console.log("entry.isIntersecting", entry.isIntersecting)
            setVisible(entry.isIntersecting)
        }, options)

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options])

    return [setRef, visible]
}


export default function Main() {
    const [setRef, visible] = useOnScreen({ threshold: 1, rootMargin: "0px 0px 150px 0px" })
    const [iconLoad, setIconLoad] = useState(false)
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

    useEffect(() => {
        if (visible && !iconLoad) {
            setIconLoad(true)
        }

    }, [visible])

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
            <div ref={projectsRef} id="projects">
                <Projects />
            </div>
            <div ref={contactRef} style={{ overflow: "hidden" }}>
                {/* React Ref accept useRef Dom and function, this case we pass setState function from useState */}

                <Contact visible={visible} iconLoad={iconLoad} />
                <div ref={setRef}></div>
            </div>
        </>
    )
}
