function About() {
    return (
        <section id="about" className="h-fit max-h-fit bg-gradient-to-tl from-teal-400 to-teal-600 dark:from-teal-400  dark:to-blue-600">
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
        </section >
    )
}

export default About