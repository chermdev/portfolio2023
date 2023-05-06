function About() {
    return (
        <section id="about" className="h-fit max-h-fit pt-16 sm:pt-32">
            <div className="m-auto max-w-[var(--max-page-width)] w-[var(--max-section-width)] flex flex-col items-center justify-center bg-gradient-to-r bg-clip-text dark:from-teal-400 dark:to-blue-600">
                <h2 className="text-4xl md:text-3xl xl:text-6xl font-bold mb-6 md:mb-10">About me</h2>
                <div className="flex flex-col gap-6 text-lg leading-6 break-word text-center tracking-wide md:gap-6 md:text-xl xl:text-4xl ">
                    <p>
                        I am <strong className="text-transparent">Carlos Emmanuel Hernandez</strong>, mechatronics engineer with software development experience. I like the next 5 things:
                    </p>
                    <div className="m-auto flex flex-wrap gap-2 justify-center items-center text-transparent font-bold">
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <div className="rounded-full h-2 w-2 bg-gray-800 dark:bg-white"></div>
                            <p>Automate things with programming</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <div className="rounded-full h-2 w-2 bg-gray-800 dark:bg-white"></div>
                            <p>Web development</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <div className="rounded-full h-2 w-2 bg-gray-800 dark:bg-white"></div>
                            <p>Create chat bots</p>
                        </div >
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <div className="rounded-full h-2 w-2 bg-gray-800 dark:bg-white"></div>
                            <p>Help others</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <div className="rounded-full h-2 w-2 bg-gray-800 dark:bg-white"></div>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About