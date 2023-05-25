import Contact from './About/Contact'
import Description from './About/Description'
import ResumeContactBtn from './About/Buttons/Resume'

function About() {
    return (
        <>
            {/* <section id="about" className="h-fit max-h-fit bg-gradient-to-tl from-teal-400 to-teal-600 dark:from-teal-400  dark:to-blue-600">
                <div className="bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-90 py-16 md:py-20">
                    <div className="m-auto max-w-[var(--max-page-width)] w-[var(--max-section-width)] flex flex-col items-center justify-center bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-teal-400 dark:to-blue-600">
                        <h2 className="text-left md:text-center w-full text-4xl md:text-3xl xl:text-6xl font-bold mb-6 md:mb-10 text-transparent">About me</h2>
                        <div className="flex flex-col gap-6 text-md leading-6 break-word text-left tracking-wider md:gap-6 md:text-xl xl:text-3xl 2xl:text-4xl">
                            <p>
                                I am a mechatronics engineer with software development experience. <strong className="text-transparent">I love to automate and develop things with programming</strong>, develop websites, chatbots, automate tests, help others and work with <strong className="text-transparent">Python and Javascript</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section > */}
            <section id="about" className='min-h-screen max-w-[50vw] xs:max-w-[25vw] xl:max-w-[20vw] m-auto flex flex-col items-center justify-center space-y-12 xs:space-y-32 bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 text-[3vw] xs:text-[1.2vw] xl:text-[1vw] leading-[3vw] xs:leading-[1.4vw] xl:leading-[1vw] tracking-wide text-center font-semibold uppercase '>
                <div className='overflow-hidden max-w-[50vw] max-h-[50vw] w-72 h-72 rounded-3xl animate-[ping_1s_ease-in-out_reverse]'>
                    <div className='w-full h-full bg-[url("./assets/images/bg-me.jpg")] bg-cover [background-position:0%_10%] bg-no-repeat scale-[2.4]'>

                    </div>
                </div>
                <ResumeContactBtn />
                <Contact />
                <Description />
            </section>
        </>
    )
}

export default About