import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { ReactComponent as BlobAnimation } from './assets/curves/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from './assets/curves/blobanimation-dark.svg'

export default function Home2() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <>
            <section id="home" className='h-fit bg-gradient-to-b from-transparent to-[var(--bg-color)] overflow-hidden'>
                <div className='flex flex-col items-center gap-64 xl:gap-96'>
                    <div className='absolute top-16 w-full min-h-screen h-fit z-[-1] overflow-hidden'>
                        {
                            darkMode ?
                                <BlobAnimationDark className="rotate-45" /> :
                                <BlobAnimation className="rotate-45" />
                        }
                    </div>
                    <div className='relative w-[var(--max-section-width)] max-w-[max(var(--max-page-width))] pt-48 md:pt-64 pb-16 xs:pb-32 md:pb-32 xl:pb-32 m-auto flex flex-col gap-64 md:gap-64 justify-center items-center'>
                        <div>
                            <h2 className="font-bold text-center leading-[8vw] xs:leading-[4.5vw] xl:leading-[4vw] text-[10vw] xs:text-[5.4vw] xl:text-[5vw] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 ">
                                Hello,
                                <br />
                                I <strong className="text-transparent"><span className="">automate</span><span className="hidden">develop</span></strong>
                                <br />
                                things with
                                <br />
                                programming.
                            </h2>

                        </div>
                        <div className='max-w-[50vw] xs:max-w-[25vw] xl:max-w-[20vw] m-auto flex flex-col items-center justify-center space-y-12 xs:space-y-32 bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 text-[3vw] xs:text-[1.2vw] xl:text-[1vw] leading-[3vw] xs:leading-[1.4vw] xl:leading-[1vw] tracking-wide text-center font-semibold uppercase '>
                            <p>
                                I'm Carlos Emmanuel Hernandez, a mechatronics engineer with software development experience working as <span className="text-transparent">SDET</span> and <span className="text-transparent">Web developer</span> with <span className="text-transparent">Python and Javascript</span>.
                            </p>
                            <p>
                                I love to automate tests, develop websites, chatbots and help others.
                            </p>
                            <div className='overflow-hidden max-w-[50vw] max-h-[50vw] w-72 h-72 rounded-3xl'>
                                <div className='w-full h-full bg-[url("src/assets/images/bg-me.jpg")] bg-cover [background-position:0%_10%] bg-no-repeat scale-[2.4]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='fixed top-0 h-screen w-screen backdrop-blur-[0vw] z-[-2]'></div>
            <div className='absolute top-0 min-h-screen w-full h-full z-[-3] overflow-hidden'>
                <div className=''>
                    <div className='absolute top-1/2 left-1/2 translate-x-[-80%] translate-y-[-95%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-b from-blue-400 to-teal-300 dark:from-sky-500 dark:to-blue-400 blur-[0px] opacity-80'>
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-teal-400 to-teal-600 dark:from-blue-500 dark:to-sky-600 blur-[0px] opacity-80'>
                    </div>
                    <div className='absolute top-1/2 left-1/2 translate-x-[-80%] translate-y-[-5%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-t from-teal-400 to-sky-400 dark:from-purple-500 dark:to-blue-400 blur-[0px] opacity-80'>
                    </div>
                </div>
            </div> */}
        </>
    )
}