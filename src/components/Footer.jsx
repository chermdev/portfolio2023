import { ReactComponent as LinkedinIcon } from './../assets/logos/technologies/linkedin.svg'
import { ReactComponent as GithubIcon } from './../assets/logos/technologies/github.svg'


function ContactForm() {

    let contactButtonText = "Send message"

    const inputStyle = `block
                        py-1.5
                        px-2
                        w-full
                        text-xs sm:text-sm md:text-base xl:text-lg
                        rounded-lg
                        md:rounded-xl
                        shadow-sm
                        border-0
                        text-white
                        bg-black
                        bg-opacity-20
                        placeholder-teal-400
                        focus:ring-white
                        dark:placeholder-sky-500
                        dark:text-white`

    function Form(attrs) {
        return (
            <input className={inputStyle} {...attrs} />
        )
    }

    function TextArea(attrs) {
        return (
            <textarea className={inputStyle} {...attrs} />
        )
    }

    return (
        <section id="contact" className="py-16 md:py-20 mx-auto w-[50rem] max-w-[var(--max-page-width)]">


            <h1 className="mb-3 md:mb-4 xl:mb-6 text-2xl md:text-4xl xl:text-6xl tracking-tight font-extrabold text-center  dark:text-white">Get in touch!</h1>
            <p className="mb-2 text-base md:text-xl xl:text-2xl font-light text-center text-white">I'm open to new opportunities!</p>
            <form action="" className="space-y-4">
                <div className="w-full">
                    <label for="company" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Company</label>
                    <Form type="text" id="company" placeholder="company name" required />
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="w-full">
                        <label for="name" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Your name</label>
                        <Form type="text" id="name" placeholder="your name" required />
                    </div>
                    <div className="w-full">
                        <label for="email" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Email</label>
                        <Form type="email" id="email" placeholder="email@example.com" required />
                    </div>
                </div>
                <div className="w-full">
                    <label for="job-title" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Job title</label>
                    <Form type="text" id="job-title" placeholder="Job title" required />
                </div>
                <div>
                    <label for="salary-range" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Salary range</label>
                    <div className="flex flex-row gap-4 w-72 md:w-96">
                        <div className="flex flex-row gap-4 items-center">
                            <p className="text-xs sm:text-sm md:text-base xl:text-lg text-teal-200 dark:text-sky-200">From</p>
                            <Form type="text" id="from-salary" placeholder="0" required />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <p className="text-xs sm:text-sm md:text-base xl:text-lg text-teal-200 dark:text-sky-200">to</p>
                            <Form type="text" id="to-salary" placeholder="99999" required />

                            <p className="text-xs sm:text-sm md:text-base xl:text-lg text-teal-200 dark:text-sky-200">USD</p>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2 pb-2">
                    <label for="message" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Job description</label>
                    <TextArea id="message" rows="3" placeholder="Job description" />
                </div>
                <button type="submit" className="py-1 px-4 text-sm md:text-lg xl:text-xl font-medium shadow-sm text-center rounded-lg md:rounded-xl text-teal-800 bg-teal-300  hover:text-white hover:bg-teal-800 dark:text-blue-500 dark:bg-sky-300 dark:hover:text-white  dark:hover:bg-blue-800">{contactButtonText}</button>
            </form>
        </section>
    )
}

function SocialFooter() {
    return (
        <section id="social" className="flex gap-2 md:gap-4 py-6 items-center justify-center">
            <a className='flex items-center justify-center w-[32px] h-[32px] rounded-md p-[2px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-black dark:bg-black text-white hover:text-white dark:hover:text-white hover:bg-black' href="https://github.com/chermdev" target="_blank" alt="github">
                <GithubIcon className="fill-current" />
            </a>
            <a className='flex items-center justify-center w-[32px] h-[32px] rounded-md p-[2px] bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-all duration-300 overflow-hidden bg-black dark:bg-black text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] hover:text-white ' href="https://www.linkedin.com/in/emmanuelhdz/" target="_blank" alt="linkedin">
                <LinkedinIcon />
            </a>
        </section>
    )
}

function Footer() {
    return (
        <footer className="bg-gradient-to-br text-white from-teal-400 to-teal-600 dark:from-cyan-400 dark:to-cyan-600">
            {/* <ContactForm /> */}
            <SocialFooter />
        </footer>
    )
}

export default Footer