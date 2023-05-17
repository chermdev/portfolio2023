import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { ReactComponent as LinkedinIcon } from './assets/logos/linkedin.svg'
import { ReactComponent as BlobAnimation } from './assets/curves/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from './assets/curves/blobanimation-dark.svg'


export default function Home2() {


    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (

        <div className='relative h-fit bg-gradient-to-b from-transparent to-[var(--bg-color)] overflow-hidden flex flex-col items-center'>
            <div className='absolute top-16 h-fit z-[-1] overflow-hidden animate-[easeIn_1s_ease-in-out_0.3s_both] animate-[ping_1s_ease-in-out_reverse]'>
                {
                    darkMode ?
                        <BlobAnimationDark className="w-[120vh] md:w-[100vw] rotate-45" /> :
                        <BlobAnimation className="w-[120vh] md:w-[100vw] rotate-45" />
                }
            </div>
            <section id='home' className='flex flex-col items-center' >
                <div className='py-64 w-[var(--max-section-width)] max-w-[max(var(--max-page-width))] m-auto flex flex-col justify-center items-center gap-32 md:gap-[18rem]'>
                    <h2 className="font-bold text-center leading-[8vw] xs:leading-[4.5vw] xl:leading-[4vw] text-[10vw] xs:text-[5.4vw] xl:text-[5vw] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromTop_0.5s_ease-in-out_0.3s_both]">
                        Hello,
                        <br />
                        I <strong className="text-transparent"><span className="">automate</span><span className="hidden">develop</span></strong>
                        <br />
                        things with
                        <br />
                        programming.
                    </h2>
                </div>
            </section >
            <section id='about' className='min-h-screen max-w-[50vw] xs:max-w-[25vw] xl:max-w-[20vw] m-auto flex flex-col items-center justify-center space-y-12 xs:space-y-32 bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 text-[3vw] xs:text-[1.2vw] xl:text-[1vw] leading-[3vw] xs:leading-[1.4vw] xl:leading-[1vw] tracking-wide text-center font-semibold uppercase '>
                <div className='overflow-hidden max-w-[50vw] max-h-[50vw] w-72 h-72 rounded-3xl animate-[ping_1s_ease-in-out_reverse]'>
                    <div className='w-full h-full bg-[url("./assets/images/bg-me.jpg")] bg-cover [background-position:0%_10%] bg-no-repeat scale-[2.4]'></div>
                </div>
                <div className='flex flex-row gap-2 md:gap-4'>
                    <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite] '>
                        {/* <a className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] w-15 h-10 xs:w-16 xs:h-11 sm:w-20 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]' href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" alt="linkedin">
                            <LinkedinIcon className="fill-current w-[3rem] h-[3rem]" />
                        </a> */}
                        <a href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" alt="linkedin" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]">
                            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[0.9rem] group-hover:bg-opacity-0">
                                <LinkedinIcon className="fill-current w-[3rem] h-[3rem]" />
                            </span>
                        </a>
                    </div>
                    <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite]'>
                        {/* <a href="https://drive.google.com/file/d/1pl2hFscsL_de1a6o6zHLBx5l-YOfhcuR" target='_blank' className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-white hover:bg-[#de292e] dark:hover:bg-[#de292e] w-15 h-10 xs:w-16 xs:h-11 sm:w-20 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z" fill="currentColor" /></svg>
                        </a> */}
                        <a href="https://drive.google.com/file/d/1pl2hFscsL_de1a6o6zHLBx5l-YOfhcuR" target='_blank' alt="cv" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 animate-[easeIn_0.6s_ease-in-out_0.5s_both,slideFromRight_0.6s_ease-in-out_0.5s_both]">
                            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[0.9rem] group-hover:bg-opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z" fill="currentColor" /></svg>
                            </span>
                        </a>
                    </div>
                    <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite]'>
                        {/* <button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white w-15 h-10 xs:w-16 xs:h-11 sm:w-20 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]' onClick={() => { console.log("copied!") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z" /></svg>
                        </button> */}
                        {/* <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 animate-[easeIn_0.6s_ease-in-out_0.7s_both,slideFromRight_0.6s_ease-in-out_0.7s_both]">
                            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[0.9rem] group-hover:bg-opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z" /></svg>
                            </span>
                        </button> */}
                    </div>
                </div>
                <p>
                    I'm Carlos Emmanuel Hernandez, a mechatronics engineer with software development experience working as <span className="text-transparent">SDET</span> and <span className="text-transparent">Web developer</span> with <span className="text-transparent">Python and Javascript</span>.
                </p>
                <p>
                    I love to automate tests, develop websites, chatbots and help others.
                </p>

            </section>
        </div>
    )
}