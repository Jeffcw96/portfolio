import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contact'
import '../App.css'
import main from '../static/main-img.jpg'
import { Link, Events } from 'react-scroll'

function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
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
            if (navbarElement.current) {
                navbarElement.current.classList.remove("mobile-active");
                document.body.style.overflow = "initial"
            }

        }
    }, [mobileNavVisible])

    function navigationScroll() {
        navbarElement.current.classList.remove("mobile-active");
        document.body.style.overflow = "initial";
        setMobileNavVisible(false)
    }

    Events.scrollEvent.register('end', function (to, element) {
        navigationScroll()
    });

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
                    <li><Link to="about" smooth={true} duration={1000} >About Me</Link></li>
                    <li><Link to="projects" smooth={true} duration={1000} >Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000} >Contact</Link></li>
                </ul>
            </div>
            <div ref={aboutRef} id="about">
                {/* <About /> */}
                <div className="parallax" style={{ backgroundImage: `url(${main})` }}>
                    <div className='intro'>
                        <h1>Hello, I'm <span>Jeff Chang</span>. <br />I'm a full-stack web developer</h1>
                    </div>
                    <div className="view-project">
                        <Link to="projects" smooth={true} duration={500}>
                            <h2>View my work</h2>
                            <svg className="arrows">
                                <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-50px', height: '10px', width: '100%' }} id="projects" ref={projectsRef}></div>
                <Projects />
            </div>
            <div ref={contactRef} style={{ overflow: "hidden" }} id="contact">
                {/* React Ref accept useRef Dom and function, this case we pass setState function from useState */}

                <Contact visible={visible} iconLoad={iconLoad} />
                <div ref={setRef}></div>
            </div>
        </>
    )
}
