import { ReactComponent as LinkedinIcon } from './../assets/logos/technologies/linkedin.svg'


function Home() {

    return (
        <header className='w-full flex items-center h-fit max-h-fit'>
            <section id="home" className="py-16 md:py-20 m-auto w-[var(--max-section-width)] max-w-[max(var(--max-page-width))] flex flex-col md:flex-row-reverse gap-6 md:gap-12 xl:gap-6">
                <div className="m-auto rounded-2xl lg:rounded-[2rem] 2xl:rounded-[3rem] w-full h-[40vh] md:h-[50vw] lg:h-[70vh] bg-[url('./assets/images/bg-me.jpg')] md:max-w-[40vw] max-h-[20rem] md:max-h-[40rem] bg-no-repeat [background-position:56%_35%] [background-size:250%] md:[background-size:220%] lg:[background-size:180%] animate-[easeIn_1s_ease-out_0.5s_both]"></div>
                <div className="flex flex-col gap-6 md:gap-12 xl:gap-6">
                    <div className="mb-2 md:mb-6 from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 bg-clip-text bg-gradient-to-r animate-[easeIn_1s_ease-in-out,slideFromLeft_1s_ease-in-out]">
                        <p className="text-left text-[8vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">Hello, I'm</p>
                        <h1 className="break-all [font-size:clamp(1rem,21.5vw,12rem)] md:[font-size:clamp(1rem,9.97vw,9rem)] leading-[0.8] md:leading-[0.8] font-extrabold text-transparent">
                            CARLOS
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,14.9vw,12rem)]  md:[font-size:clamp(1rem,6.9vw,6.2rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            EMMANUEL
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,13.7vw,12rem)]  md:[font-size:clamp(1rem,6.35vw,5.7rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            HERNANDEZ
                        </h1>
                        <p className="w-full text-left text-[8vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">SDET and Web Developer.</p>
                    </div>
                    <div className='flex flex-row gap-2 md:gap-4 '>
                        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite] '>
                            <a className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]' href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" alt="linkedin">
                                <LinkedinIcon className="fill-current w-[3rem] h-[3rem]" />
                            </a>
                        </div>
                        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite]'>
                            <a href="https://drive.google.com/file/d/1pl2hFscsL_de1a6o6zHLBx5l-YOfhcuR" target='_blank' className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-white hover:bg-[#de292e] dark:hover:bg-[#de292e] w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z" fill="currentColor" /></svg>
                            </a>
                        </div>
                        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite]'>
                            <button className='flex items-center justify-center p-[8px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 xl:w-[6rem] xl:h-[4rem] rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Home