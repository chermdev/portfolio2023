import Section from "./Section"

function Home() {

    return (
        // <section id={"home"} className="flex flex-col justify-center min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)]">
        //   <h1 className="text-6xl md:text-8xl xl:text-9xl pb-12">Welcome</h1>
        //   <p className="text-2xl md:text-3xl xl:text-3xl">I'm [NAME], lorem ipsum bla bla </p>
        // </section>
        <Section id={"home"}>
            <div className="h-[calc(100vh-5rem)] flex flex-col sm:flex-row-reverse justify-evenly md:justify-left items-center">
                {/* <div className="">
                    <img className="rounded-full w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] object-cover" src="https://res.cloudinary.com/practicaldev/image/fetch/s--a67XH0QN--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png" alt="" />
                </div> */}
                <div className="h-full flex flex-col justify-around items-center md:items-center md:justify-center from-teal-500 to-blue-300 dark:from-blue-400 dark:to-pink-400 bg-clip-text bg-gradient-to-r">
                    <p className="w-full text-left text-2xl md:text-4xl text-stone-900 dark:text-white">Hello, I'm <strong className="text-transparent">Carlos Emmanuel Hernandez</strong>, SDET and Web Developer and I do</p>
                    <div className="w-min h-min [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb]">
                        <h1 className="[text-shadow:2px 2px 2px] text-[12.3vh] md:text-[17vw] leading-none text-left font-extrabold text-transparent">
                            SOFTWARE
                        </h1>
                        <h1 className="[text-shadow:2px 2px 2px] text-[9vh] md:text-[12.4vw] leading-none text-left font-extrabold text-transparent">
                            DEVELOPMENT
                        </h1>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Home