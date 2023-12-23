import Contact from './About/Contact'
import ResumeContactBtn from './About/Buttons/Resume'
import About from './About'

export default function Home() {

    return (
        <section id='home' className='flex flex-col items-center' >
            <div className='pt-64 flex flex-col justify-center items-center gap-8 md:gap-16'>
                <h2 className="font-bold text-center leading-[8vw] xs:leading-[4.5vw] xl:leading-[4vw] text-[10vw] xs:text-[5.4vw] xl:text-[5vw] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-cyan-400 dark:to-cyan-600 animate-[easeIn_0.6s_ease-in-out_0.3s_both]">
                    Hello,
                    <br />
                    I <strong className="text-transparent"><span className="">automate</span><span className="hidden">develop</span></strong>
                    <br />
                    things with
                    <br />
                    programming.
                </h2>
                <ResumeContactBtn />
                <Contact />
            </div>
            <About />
        </section >

    )
}