import { ReactComponent as Curve1 } from './assets/curves/curve1.svg'
import { ReactComponent as Curve2 } from './assets/curves/curve2.svg'
import { ReactComponent as Curve3 } from './assets/curves/curve3.svg'
import { ReactComponent as ComputerIcon } from './assets/icons/computer.svg'
import GithubButton from './components/GithubButton'
import { ReactComponent as GithubIcon } from './assets/logos/github.svg'
import { ReactComponent as LinkedinIcon } from './assets/logos/linkedin.svg'
import IconButton from './components/IconButton'
import LinkedinButton from './components/LinkedinButton'


function Home() {

    return (
        <header className='w-full flex items-center h-fit max-h-fit '>
            <section id="home" className="m-auto pt-24 sm:pt-32 w-[var(--max-section-width)] max-w-[max(var(--max-page-width))] flex flex-col md:flex-row-reverse gap-6 md:gap-12 xl:gap-6">
                <div className="m-auto rounded-2xl lg:rounded-[2rem] 2xl:rounded-[3rem] w-full h-[40vh] md:h-[50vw] lg:h-[70vh] bg-[url('./assets/images/bg-me.jpg')] md:max-w-[40vw] max-h-[20rem] md:max-h-[40rem] bg-no-repeat [background-position:56%_35%] [background-size:250%] md:[background-size:220%] lg:[background-size:180%] animate-[easeIn_1s_ease-out_0.5s_both]"></div>
                <div className="flex flex-col gap-6 md:gap-12 xl:gap-6">
                    <div className=" from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 bg-clip-text bg-gradient-to-r animate-[easeIn_1s_ease-in-out,slideFromLeft_1s_ease-in-out]">
                        <p className="text-left text-[5vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">Hello, I'm</p>
                        <h1 className="break-all [font-size:clamp(1rem,21.5vw,12rem)] md:[font-size:clamp(1rem,9.97vw,9rem)] leading-[0.8] md:leading-[0.8] font-extrabold text-transparent">
                            CARLOS
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,14.9vw,12rem)]  md:[font-size:clamp(1rem,6.9vw,6.2rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            EMMANUEL
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,13.7vw,12rem)]  md:[font-size:clamp(1rem,6.35vw,5.7rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            HERNANDEZ
                        </h1>
                        <p className="w-full text-left text-[5vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">SDET and Web Developer.</p>
                    </div>
                    <div className='flex flex-row gap-2 md:gap-4 '>
                        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite]'>
                            <a className='flex items-center justify-center p-[6px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 xl:w-[4rem] xl:h-[4rem] rounded-xl animate-[easeIn_0.3s_ease-in-out_0.6s_both,slideFromLeft_0.3s_ease-in-out_0.6s_both]' href="https://github.com/chermdev" target="_blank" alt="github">
                                <GithubIcon className="fill-current w-[4rem] h-[4rem]" />
                            </a>
                        </div>
                        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite] '>
                            <a className='flex items-center justify-center p-[6px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-gray-400 dark:bg-gray-500 text-black dark:text-white hover:text-white dark:hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 xl:w-[4rem] xl:h-[4rem] rounded-xl animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]' href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" alt="linkedin">
                                <LinkedinIcon className="fill-current w-[4rem] h-[4rem]" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Home