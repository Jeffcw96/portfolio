import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import '../App.css'

function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);


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
    const location = useLocation()
    const [setRef, visible] = useOnScreen({ threshold: 1, rootMargin: "0px 0px 150px 0px" })
    const [mobileNavVisible, setMobileNavVisible] = useState(false)
    const [iconLoad, setIconLoad] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const aboutRef = useRef()
    const projectsRef = useRef()
    const contactRef = useRef()
    const navbarElement = useRef()
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

    useEffect(() => {
        if (location.state === "project") {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])

    useEffect(() => {
        if (mobileNavVisible) {
            navbarElement.current.classList.add("mobile-active");
            document.body.style.overflow = "hidden"
        }

        return () => {
            navbarElement.current.classList.remove("mobile-active");
            document.body.style.overflow = "initial"
        }
    }, [mobileNavVisible])

    function navigationScroll(target) {
        navbarElement.current.classList.remove("mobile-active");
        document.body.style.overflow = "initial";
        setMobileNavVisible(false)
        if (target === "about") {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
            return
        }

        if (target === "project") {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
            return
        }

        if (target === "contact") {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
            return
        }
    }

    window.addEventListener('scroll', changeNavColor)

    return (
        <>
            <div className={navbar ? 'mobile-nav active' : 'mobile-nav'}>
                <div id="nav-icon" className={mobileNavVisible ? 'open' : null} onClick={() => setMobileNavVisible(!mobileNavVisible)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={navbar ? 'navigation-header active' : 'navigation-header'} ref={navbarElement}>
                <ul className="navigation-container">
                    <li onClick={() => navigationScroll('about')}>About Me</li>
                    <li onClick={() => navigationScroll('project')}>Projects</li>
                    <li onClick={() => navigationScroll('contact')}>Contact</li>
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
