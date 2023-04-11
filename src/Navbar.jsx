import { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { ReactComponent as Github } from './assets/logos/github.svg'
import { ReactComponent as Python } from './assets/logos/python-color.svg'
import { ReactComponent as Javascript } from './assets/logos/javascript-color.svg'
import ToggleButton from './ToggleButton'
import { DarkModeContext } from './context/DarkModeContext'

function NavbarLi({ children, current, id }) {

    return (
        <li className={`transition-all duration-300 ${current == id ? "text-gray-800 dark:text-white" : "text-gray-400 dark:text-gray-500 hover:text-gray-800 hover:dark:text-white"}`}>
            <a href={`#${id}`}>{children}</a>
        </li>
    )
}
function NavbarMenuButton({ setNavbar, navbar }) {
    return (
        <div className="md:hidden">
            <button
                className="navbar-menu-button p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
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
                        className="w-6 h-6"
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
            <a href="/">
                <div className='flex flex-row items-center gap-2'>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--font-color)]">chermdev
                    </h2>
                    {/* <div className='flex items-center justify-start gap-1 text-xs leading-3'>
                        <Python className='w-6 h-6' alt="Python">
                        </Python>
                        <Javascript className='w-6 h-6'>
                        </Javascript>
                    </div> */}
                </div>
            </a >
        </div>
    )
}

function NavbarItems({ current }) {
    return (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 whitespace-nowrap">
            <NavbarLi key={1} current={current} id={"home"}>
                Home
            </NavbarLi>
            {/* <NavbarLi key={2} current={current} id={"about"}>
                About
            </NavbarLi> */}
            <NavbarLi key={2} current={current} id={"work"}>
                Work experience
            </NavbarLi>
            {/* <NavbarLi key={4} current={current} id={"skills"}>
                Skills
            </NavbarLi> */}
        </ul>
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
            const sections = document.querySelectorAll('section')
            const handleScroll = () => {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.clientHeight
                    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
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
        <nav className={`fixed top-0 z-50 backdrop-blur-lg shadow-xl w-full bg-[var(--bg-navbar-color)] md:flex md:items-center md:justify-center ${navbar ? "h-auto" : "h-12 sm:h-20"}`}>
            <div className="md:flex md:max-w-[var(--max-page-width)] md:w-[var(--page-width)] md:justify-between">
                <div id="bar" className='flex z-52 justify-center items-center md:bg-inherit'>
                    <div className="h-12 sm:h-20 max-w-[var(--max-page-width)] w-[var(--page-width)] md:w-auto flex items-center justify-between py-4 md:py-6 md:flex md:gap-6">
                        <NavbarLogo />
                        <div className='flex items-center gap-3'>
                            <SchemeButton />
                            <NavbarMenuButton setNavbar={setNavbar} navbar={navbar} />
                        </div>
                    </div>
                </div>
                <div id="items" className={`ease-linear transition duration-150 overflow-hidden flex gap-5 justify-center items-center md:bg-inherit md:opacity-100 ${navbar ? "opacity-100" : "opacity-0"
                    } `}>
                    <div
                        className={`max-w-[var(--max-page-width)] w-[var(--page-width)] justify-self-center pb-3 md:block md:pb-0 md:mt-0`}
                    >
                        <NavbarItems current={current} />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
