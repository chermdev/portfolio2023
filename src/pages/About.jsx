import Contact from './About/Contact'
import Description from './About/Description'
import ResumeContactBtn from './About/Buttons/Resume'

function About() {
    return (
        <div className='border-2 border-l-2 shadow-xl animate-[easeIn_0.6s_ease-in-out_0.5s_both] my-16 py-12 m-auto max-w-[var(--max-page-width)] bg-gradient-to-b from-white/10 to-white/40 dark:from-black/10 dark:to-black/40 rounded-2xl px-10 flex flex-col lg:flex-row items-center justify-center gap-12 backdrop-blur-md border-white/40 dark:border-white/10 ring-gray-900'>
            <div className='overflow-hidden max-w-[50vw] max-h-[50vw] w-72 h-72 rounded-3xl '>
                <div className='w-full h-full bg-[url("./assets/images/bg-me.jpg")] bg-cover [background-position:0%_10%] bg-no-repat scale-[2.4]'>
                </div>
            </div>
            <div className='flex flex-col lg:max-w-[50%] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500'>
                <h2 className="text-center w-full text-4xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-10 text-transparent">About me</h2>
                <Description />
            </div>
        </div>
    )
}

export default About