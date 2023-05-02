
function ContactForm() {

    let contactButtonText = "Send message"

    const inputStyle = `block
                        p-2.5
                        w-full
                        text-sm
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
        <form action="#" className="space-y-8">
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-teal-200 dark:text-sky-200">Your email</label>
                <Form type="email" id="email" placeholder="name@email.com" required />
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-teal-200 dark:text-sky-200">Subject</label>
                <Form type="text" id="subject" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-teal-200 dark:text-sky-200">Your message</label>
                <TextArea id="message" rows="6" placeholder="Leave a comment..." />
            </div>
            <button type="submit" className="py-1 px-4 text-md font-medium shadow-sm text-center rounded-full text-teal-800 bg-teal-300  hover:text-white hover:bg-teal-800 dark:text-blue-500 dark:bg-sky-300 dark:hover:text-white  dark:hover:bg-blue-800">{contactButtonText}</button>
        </form>
    )
}


function Footer() {
    return (
        <footer className="bg-gradient-to-b from-teal-400 to-teal-600 text-white dark: dark:from-sky-500 dark:to-blue-500">
            <section id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h1 className="mb-12 text-4xl tracking-tight font-extrabold text-center  dark:text-white">Get in touch!</h1>
                <p className="mb-4 font-light text-center text-white sm:text-xl">I'm open to new opportunities!</p>
                <ContactForm />
            </section>
            <section id="social" className="flex gap-4 py-6 items-center justify-center bg-black bg-opacity-20">
                <a href="https://github.com/chermdev" alt="github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/emmanuelhdz/" alt="linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>
                </a>
            </section>
        </footer>
    )
}

export default Footer