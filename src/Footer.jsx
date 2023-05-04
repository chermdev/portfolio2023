import GithubButton from './components/GithubButton'
import LinkedinButton from './components/LinkedinButton'


function ContactForm() {

    let contactButtonText = "Send message"

    const inputStyle = `block
                        p-2
                        w-full
                        text-xs sm:text-sm md:text-base xl:text-lg
                        rounded-lg
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
        <form action="#" className="space-y-2">
            <div className="flex flex-row items-center justify-between gap-4">
                <div className="w-full">
                    <label for="company" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Company</label>
                    <Form type="text" id="company" placeholder="company name" required />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pb-6">
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
                <div className="flex flex-col md:flex-row gap-4 w-52 md:w-96">
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
            <div className="sm:col-span-2 pb-6">
                <label for="message" className="block mb-1 md:mb-2 text-xs sm:text-sm md:text-base xl:text-lg font-medium text-teal-200 dark:text-sky-200">Job description</label>
                <TextArea id="message" rows="6" placeholder="" />
            </div>
            <button type="submit" className="py-1 px-4 text-sm md:text-lg xl:text-xl font-medium shadow-sm text-center rounded-full text-teal-800 bg-teal-300  hover:text-white hover:bg-teal-800 dark:text-blue-500 dark:bg-sky-300 dark:hover:text-white  dark:hover:bg-blue-800">{contactButtonText}</button>
        </form>
    )
}


function Footer() {
    return (
        <footer className="bg-gradient-to-b from-teal-400 to-teal-600 text-white dark: dark:from-sky-500 dark:to-blue-500">
            <section id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h1 className="mb-6 md:mb-8 xl:mb-12 text-2xl md:text-4xl xl:text-6xl tracking-tight font-extrabold text-center  dark:text-white">Get in touch!</h1>
                <p className="mb-3 md:mb-4 xl:mb-6 text-base md:text-xl xl:text-2xl font-light text-center text-white">I'm open to new opportunities!</p>
                <ContactForm />
            </section>
            <section id="social" className="flex gap-2 md:gap-4 py-6 items-center justify-center bg-black bg-opacity-20">
                <GithubButton />
                <LinkedinButton />
            </section>
        </footer>
    )
}

export default Footer