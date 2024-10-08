import { useContext, useEffect, useRef, useState } from 'react'
import { ReactComponent as Github } from './../assets/logos/technologies/github.svg'
import { ReactComponent as Python } from './../assets/logos/technologies/python-color.svg'
import { ReactComponent as Javascript } from './../assets/logos/technologies/javascript-color.svg'
import ToggleButton from './ToggleButton'
import { Link, NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

function NavbarLinkHash({ children, to, current }) {

    return (
        <NavHashLink
            to={`${to}`}
            className={({ isActive }) => isActive && to.includes(current) ? "text-black dark:text-white font-semibold" : "text-gray-800 dark:text-gray-400 hover:text-gray-800 hover:dark:text-white"}>
            {children}
        </NavHashLink>
    )
}

function NavbarLinkRoute({ children, to }) {

    return (
        <NavLink
            to={`${to}`}
            className={({ isActive }) => isActive ? "text-black dark:text-white font-semibold" : "text-gray-800 dark:text-gray-400 hover:text-gray-800 hover:dark:text-white"}>
            {children}
        </NavLink>
    )
}

function NavbarMenuButton({ setNavbar, navbar }) {
    return (
        <div className="md:hidden flex items-center justify-center">
            <button
                className="navbar-menu-button text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
        </div>
    )
}

function NavbarLogo() {

    return (
        <div>
            <Link to="/">
                <div className='flex flex-row items-center gap-2'>
                    <h2 className="text-lg sm:text-xl font-bold text-fontcolor">Emmanuel Hdz
                    </h2>
                    <div className='flex items-center justify-start gap-1 text-xs leading-3'>
                        <Python className='w-6 h-6' alt="Python">
                        </Python>
                        <Javascript className='w-6 h-6'>
                        </Javascript>
                    </div>
                </div>
            </Link >
        </div>
    )
}

function NavbarItems({ current, navbarStyle }) {
    return (
        <nav className={`${navbarStyle}`}>
            <NavbarLinkHash to={"/#home"} current={current}>
                Home
            </NavbarLinkHash>
            <NavbarLinkHash to={"/#work"} current={current}>
                Work experience
            </NavbarLinkHash>
            <NavbarLinkRoute to={"/resume"}>
                <div className='relative'>
                    Resume
                    <span className='absolute bg-green-800/80 rounded-md text-[0.6rem] text-green-400 font-bold px-[5px] tracking-wider leading-4 top-[-5px] right-[-10px] rotate-12'>New</span>
                </div>
            </NavbarLinkRoute>
        </nav>
    )
}

function SchemeButton() {
    return (
        <ToggleButton />
    )
}

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [current, setCurrent] = useState()

    useEffect(
        () => {
            const handleScroll = () => {
                const sections = document.querySelectorAll('section')
                sections.forEach(section => {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.clientHeight
                    if (window.scrollY >= (sectionTop - 400)) {
                        setCurrent(section.id)
                    }
                })
            }
            window.addEventListener('scroll', handleScroll)
            handleScroll()
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, []
    )

    return (
        <nav className={`w-screen sticky top-0 z-50 backdrop-blur-lg flex justify-center items-center font-medium`}>
            <div className={`w-[var(--max-navbar-width)] text-lg max-w-[max(var(--max-page-width))] overflow-hidden ${navbar ? "h-auto" : "h-12 md:h-16"}`}>
                <div className='flex flex-row gap-3 md:gap-0 justify-between items-center h-12 md:h-16'>
                    <NavbarLogo />
                    <div className='flex gap-3 md:gap-6 items-center'>
                        <NavbarItems current={current} navbarStyle={"hidden md:flex gap-6 items-center  whitespace-nowrap"} />
                        <SchemeButton />
                        <NavbarMenuButton setNavbar={setNavbar} navbar={navbar} />
                    </div>
                </div>
                <NavbarItems current={current} navbarStyle={`md:hidden ease-linear transition duration-150 md:bg-inherit flex flex-col p-6 gap-6 md:flex-row items-center whitespace-nowrap ${navbar ? "opacity-100" : "opacity-0"}`} />
            </div>
        </nav >
    )
}

export default Navbar
