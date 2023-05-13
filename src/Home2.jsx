import { ReactComponent as BlobAnimation } from './assets/curves/blobanimation.svg'

export default function Home2() {
    return (
        <section id="home" className="flex flex-col bg-gradient-to-b from-transparent to-[var(--bg-color)] pb-32 pt-64 md:pb-64 md:pt-96">
            <div className="m-auto w-[var(--max-section-width)] max-w-[max(var(--max-page-width))] flex flex-col items-center gap-64 xl:gap-96">
                <h2 className="font-bold text-center leading-[8vw] xs:leading-[4.5vw] xl:leading-[4vw] text-[10vw] xs:text-[5.4vw] xl:text-[5vw] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500">
                    Hello,
                    <br />
                    I <strong className="text-transparent"><span className="">automate</span><span className="hidden">develop</span></strong>
                    <br />
                    things with
                    <br />
                    programming.

                </h2>
                <div className="max-w-[50vw] xs:max-w-[25vw] xl:max-w-[20vw] m-auto flex flex-col items-center justify-center space-y-24 xs:space-y-32 bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 text-[3.2vw] xs:text-[1.2vw] xl:text-[1vw] leading-[3.5vw] xs:leading-[1.4vw] xl:leading-[1vw] tracking-wide text-center font-semibold uppercase">
                    <p>
                        I'm Carlos Emmanuel Hernandez, a mechatronics engineer with software development experience working as <span className="text-transparent">SDET</span> and <span className="text-transparent">Web developer</span> with <span className="text-transparent">Python and Javascript</span>.
                    </p>
                    <p>
                        I love to automate tests, develop websites, chatbots and help others.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center w-full min-h-screen h-fit absolute top-0 z-[-1] overflow-hidden'>
                <BlobAnimation className="scale-[2] sm:scale-100 rotate-45" />
            </div>
        </section>
    )
}