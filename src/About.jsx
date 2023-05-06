function About() {
    return (
        <section id="about" className="mt-16 md:mt-20 h-fit max-h-fit bg-gradient-to-tl from-teal-400 to-teal-600 dark:from-teal-400  dark:to-blue-600">
            <div className="bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-90 py-20 sm:py-40 ">
                <div className="m-auto max-w-[var(--max-page-width)] w-[var(--max-section-width)] flex flex-col items-center justify-center bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-teal-400 dark:to-blue-600">
                    <h2 className="text-left md:text-center w-full text-4xl md:text-3xl xl:text-6xl font-bold mb-6 md:mb-10 text-transparent">About me</h2>
                    <div className="flex flex-col gap-6 text-md leading-6 break-word text-left tracking-wider md:gap-6 md:text-xl xl:text-3xl 2xl:text-4xl">
                        <p>
                            I am <strong className="text-transparent">Carlos Emmanuel Hernandez</strong>, mechatronics engineer with software development experience. I like 5 things:
                        </p>
                        <ul className="m-auto list-disc list-inside font-bold text-left">
                            <li >
                                <strong className="text-transparent">Automate things with programming</strong>
                            </li>
                            <li>
                                <strong className="text-transparent">Web development</strong>
                            </li>
                            <li>
                                <strong className="text-transparent">Create chat bots</strong>
                            </li>
                            <li>
                                <strong className="text-transparent">Help others</strong>
                            </li>
                            <li>
                                <strong className="text-transparent">Python</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About