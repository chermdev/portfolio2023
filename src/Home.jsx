import { ReactComponent as Curve1 } from './assets/curves/curve1.svg'
import { ReactComponent as Curve2 } from './assets/curves/curve2.svg'
import { ReactComponent as Curve3 } from './assets/curves/curve3.svg'
import { ReactComponent as ComputerIcon } from './assets/icons/computer.svg'


function Home() {

    return (
        <section id="home" className="flex justify-center pt-16 sm:pt-20">
            <div className="min-h-screen h-full max-h-fit flex justify-end items-center flex-col-reverse md:flex-row">
                <div className="md:w-[50%] flex justify-center items-center">
                    <div className=" from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 bg-clip-text bg-gradient-to-r">
                        <p className="text-left text-[5vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">Hello, I'm</p>
                        <h1 className="break-all [font-size:clamp(1rem,15.8vw,12rem)] md:[font-size:clamp(1rem,10vw,10rem)] leading-[0.8] md:leading-[0.8] font-extrabold text-transparent">
                            CARLOS
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,10.9vw,12rem)]  md:[font-size:clamp(1rem,6.9vw,6.9rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            EMMANUEL
                        </h1>
                        <h1 className="break-all [font-size:clamp(1rem,10vw,12rem)]  md:[font-size:clamp(1rem,6.35vw,6.35rem)] leading-[0.9] md:leading-[0.9] font-extrabold text-transparent">
                            HERNANDEZ
                        </h1>
                        <p className="w-full text-left text-[5vw] md:[font-size:clamp(1rem,4vw,5rem)] leading-none text-stone-900 dark:text-white">SDET and Web Developer.</p>
                    </div>
                </div>
                <div className="p-12 xs:p-14 md:p-16 lg:p-20 md:w-[50%] flex justify-center items-center ">
                    <ComputerIcon className='w-full fill-current' />
                    {/* <div className='absolute blur-[4rem] sm:blur-[5rem] lg:md:blur-[7rem] xl:md:blur-[9rem] 2xl:blur-[12rem] z-[-2]'>
                        <Curve2 className='top-1/2 -translate-y-1/2 w-[200vw] fill-teal-300 dark:fill-sky-700' />
                        <Curve1 className='top-1/2 -translate-y-1/2 w-[250vw] fill-teal-200 dark:fill-blue-900' />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Home