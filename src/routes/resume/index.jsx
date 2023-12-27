import { ReactComponent as QRIcon } from '../../assets/resume/qr.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/resume/linkedin.svg'
import { ReactComponent as WebIcon } from '../../assets/resume/globe.svg'
import { ReactComponent as EmailIcon } from '../../assets/resume/email.svg'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';



export default function Resume() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'CV_HERNANDEZ_MONCADA'
    });
    return (
        <main className='min-h-screen mt-16 bg-gradient-to-b from-transparent to-white/40'>
            <section ref={componentRef} className='py-10 px-12 bg-white text-black max-w-[760px] md:max-h-[1050px] m-auto text-xs divide-y-2 tracking-wider'>
                <header className='flex flex-wrap justify-between gap-4 pb-2'>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 id="name" className='text-xl font-bold'>Carlos Emmanuel Hernández Moncada</h1>
                            <p id="role" className='text-lg'>Software Development Engineer in Test</p>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <div>
                                <p className='font-bold'>Expertise areas</p>
                                <p>Automation, Development, Testing</p>
                            </div>
                            <div>
                                <p className='font-bold'>Location </p>
                                <p>Remote México</p>
                            </div>
                            <div>
                                <p className='font-bold'>Languages</p>
                                <p>Spanish, English</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <QRIcon className="w-[150px] fill-current" />
                    </div>
                </header>
                <section id="contact" className='flex flex-wrap justify-between py-2'>
                    <a className='flex flex-row items-center gap-2' href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="w-[16px] h-[16px]" />
                        https://www.linkedin.com
                    </a>
                    <a className='flex flex-row items-center gap-2' href="https://emmanuelhdz.com" target="_blank" rel="noreferrer">
                        <WebIcon className="w-[16px] h-[16px]" />
                        https://emmanuelhdz.com
                    </a>
                    <a className='flex flex-row items-center gap-2' href="mailto:contact@emmanuelhdz.com">
                        <EmailIcon className="w-[16px] h-[16px]" />
                        contact@emmanuelhdz.com
                    </a>
                </section>
                <section id="introduction" className='py-2 text-justify'>
                    <p>2+ years of hands-on experience working as SDET with Python. Solid knowledge of Python creating test automation frameworks from scratch with Pytest and Selenium applying Page Object Model and SOLID design principles.<br />During my career I have worked with Selenium, Pytest, Playwright, Google Cloud APIs and more. I have also developed personal projects like APIs with FastAPI and web pages using React, Tailwind and Supabase.<br />Knowledge of HTML, CSS, Tailwind and improving my skills with SQL, Javascript and Playwright.<br />Currently learning: Astro, React, Next.js, Cypress, PostgreSQL and more.</p>
                </section>


                <section id="work-experience" className='space-y-2 py-2'>
                    <h2 className='font-bold text-base'>Work experience</h2>
                    <article>
                        <h3 className='font-semibold'>Software Development Engineer in Test II</h3>
                        <p className='font-medium'>Jan 2021 - Now</p>
                        <p className='text-justify'>
                            Create automated E2E user acceptance tests for an e-commerce web page, testing more than 30 locales in multi-ple languages using Python, Pytest, Selenium and API from Google:
                        </p>
                        <ul className='ml-4 list-disc list-inside'>
                            <li>Develop and maintain end-to-end regression tests.</li>
                            <li>Write framework documentation.</li>
                            <li>Create custom classes and functions to wrap Selenium functions.</li>
                            <li>Apply Page Object Model.</li>
                            <li>Pytest: Creation of fixtures and pytest plugins to generate custom HTML and Excel reports.</li>
                            <li>Working with Gmail API to confirm emails.</li>
                            <li>Working with Google Drive API to upload files automatically.</li>
                            <li>Keep tests up-to-date with page changes.</li>
                            <li>Create python scripts to automate tasks related to file handling.</li>
                            <li>Create and manage Jira tests, test sets, test plans, and test executions.</li>
                            <li>Manual testing.</li>
                        </ul>
                    </article>
                    <article>
                        <h3 className='font-semibold'>Embedded Automotive Test Engineer</h3>
                        <p className='font-medium'>Sept 2020 - Jan 2021 (4 months)</p>
                        <p className='text-justify'>
                            Development of automated tests using python with the client's framework to test software versions in the Instrument Panel Cluster (IPC) according to requirements.
                        </p>
                    </article>
                    <article>
                        <h3 className='font-semibold'>Software Tester</h3>
                        <p className='font-medium'>June 2019 - Apr 2020 (10 months)</p>
                        <p className='text-justify'>
                            Development of automated tests for IPC testing. Creation of scripts and functions in C# used within tests. Use of PTC Integrity, vTESTstudio and CANoe.
                        </p>
                    </article>
                </section>
                <section id="skills" className='py-2'>
                    <h2 className='font-bold text-base mb-1'>Skills</h2>
                    <ul className='ml-4 list-disc list-inside'>
                        <li className='font-medium'>Self-taught, teamwork, problem-solving, creative.</li>
                        <li>2+ years of hands-on Python experience working with Selenium, Pytest and more. OOP, Regex, Locators, Decorators, Context Managers, Comprehensions, File handling, Web Scraping, APIs, etc.</li>
                        <li>Front-end knowledge used for web testing and personal web projects. HTML, CSS and Javascript.</li>
                        <li>Git, Bitbucket, APIs knowledge and Postman.</li>
                        <li>Other: Jira/Xray, FastAPI, React and Tailwind.</li>
                    </ul>
                </section>
                <section id="education" className='pt-2'>
                    <h2 className='font-bold text-base mb-1'>Education</h2>
                    <h3 className='font-semibold'>Facultad de Ingeniería Mecánica y Eléctrica (FIME) 2015-2020</h3>
                    <p>Mechatronics Engineer</p>
                </section>
            </section>
            <footer className='sticky flex items-center justify-center bottom-0 gap-8 bg-gradient-to-b from-transparent to-black/30 py-4 w-full'>
                <Link to="/" alt="go back" className="w-fit inline-flex items-center justify-center font-medium rounded-2xl hover:animate-[wiggle_0.5s_ease-in-out_infinite] group px-6 py-3 text-black bg-white/60 outline-2 outline-offset-0 outline-white/40 hover:text-white hover:outline-0 hover:bg-opacity-100 hover:bg-black backdrop-blur-sm dark:text-black dark:bg-white/80 dark:outline-white/10 dark:hover:text-white dark:hover:bg-opacity-100 dark:hover:bg-black dark:backdrop-blur-sm  shadow-dark/30 shadow-md hover:shadow-black/30 hover:shadow-lg text-center">Go back</Link>
                <button onClick={handlePrint} target="_blank" alt="download pdf" className="w-fit inline-flex items-center justify-center font-medium rounded-2xl hover:animate-[wiggle_0.5s_ease-in-out_infinite] group px-6 py-3 text-[#de2d2d] bg-white/60 outline-2 outline-offset-0 outline-[#f34545] hover:text-white hover:outline-0 hover:bg-opacity-100 hover:bg-[#d61818] backdrop-blur-sm  dark:text-[#f34545] dark:bg-white/80 dark:outline-white/10 dark:hover:text-white dark:hover:bg-opacity-100 dark:hover:bg-[#d61818] dark:backdrop-blur-sm  shadow-dark/30 shadow-md  hover:shadow-black/30 hover:shadow-lg text-center">Download PDF</button>
            </footer>
        </main>
    )
}