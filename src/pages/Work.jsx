import './Work.css'
import { ReactComponent as YazakiIcon } from './../assets/logos/companies/yazaki.svg'
import { ReactComponent as DeloitteIcon } from './../assets/logos/companies/deloitte.svg'
import { ReactComponent as PythonIcon } from './../assets/logos/technologies/python-color.svg'
import { ReactComponent as SeleniumIcon } from './../assets/logos/technologies/selenium-color.svg'
import { ReactComponent as DockerIcon } from './../assets/logos/technologies/docker-color.svg'
import { ReactComponent as JenkinsIcon } from './../assets/logos/technologies/jenkins-color.svg'
import { ReactComponent as JavascriptIcon } from './../assets/logos/technologies/javascript-color.svg'
import { ReactComponent as ReactIcon } from './../assets/logos/technologies/react-color.svg'
import { ReactComponent as NextJSIcon } from './../assets/logos/technologies/nextjs.svg'
import { ReactComponent as DjangoIcon } from './../assets/logos/technologies/django-color.svg'


function CompanyLogoLabel({ LogoComponent, colorStyle = "fill-current" }) {
    return (
        <div className='h-[1.5rem] max-w-[4rem] sm:h-[2rem] sm:max-w-[6rem] lg:h-[2rem] lg:max-w-[8rem] p-[0.3rem] rounded-md'>
            {<LogoComponent className={`h-full w-full ${colorStyle}`} />}
        </div>
    )
}

function TechnologyTag({ name }) {

    const technologyIcons = {
        python: {
            icon: PythonIcon
        },
        selenium: {
            icon: SeleniumIcon,
            color: "bg-[#59b943]"
        },
        docker: {
            icon: DockerIcon,
            color: "bg-[#2396ed]"
        },
        jenkins: {
            icon: JenkinsIcon,
            color: "bg-[#f0d6b7]"
        },
        javascript: {
            icon: JavascriptIcon,
            color: "bg-[#f7df1e]"
        },
        react: {
            icon: ReactIcon
        },
        nextjs: {
            icon: NextJSIcon
        },
        django: {
            icon: DjangoIcon,
            color: "bg-[#092e20]"
        }
    }
    const IconSelected = technologyIcons[name].icon
    const IconBgColor = technologyIcons[name]?.color
    const bgColor = IconBgColor != undefined ? IconBgColor : "bg-gray-200 dark:bg-gray-800"
    return (
        <span className={`flex items-center justify-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] ${bgColor} rounded-md overflow-hidden p-[2px]`}>
            <IconSelected />
        </span>
    )
}

function TechnologiesTags({ technologies }) {



    return (
        (technologies.length > 0) &&
        <ul className='mt-4 md:mt-6 flex gap-2 md:gap-4 flex-wrap' >
            {technologies.map((technology, index) =>
                <TechnologyTag
                    key={index}
                    name={technology}>
                </TechnologyTag>
            )}
        </ul>
    )
}

function WorkCard({ timeStr,
    companyLogo,
    role,
    description,
    tasks = [],
    technologies = [],
    active = false
}) {
    return (
        <li className={`mb-10 ml-2 md:ml-16 border p-6 rounded-lg ${active ? "border-lime-500" : "border-gray-300 dark:border-stone-800"}`}>
            {(active) ?
                (<div className="absolute w-3 h-3 rounded-full mt-1.5 -left-[0.4rem] bg-lime-500 animation-pulse"></div>) :
                (<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-[0.4rem] border border-white dark:border-gray-900 dark:bg-gray-700"></div>)
            }
            <div className='flex gap-2 md:gap-4 items-center mb-4 xl:mb-6'>
                <time className={`text-xs sm:text-base xl:text-xl font-normal leading-none ${(active) ? "text-lime-500" : "text-gray-400 dark:text-gray-500"}`}>{timeStr}</time>
                {companyLogo}
            </div>
            <h3 className="text-sm sm:text-lg font-semibold xl:text-2xl text-gray-900 dark:text-white">{role}</h3>
            <p className={`mb-4 md:mb-6 text-xs sm:text-base xl:text-xl font-normal text-gray-800 ${(active) ? "text-gray-800 dark:text-gray-300" : "text-gray-400 dark:text-gray-400"}`}>{description}</p>
            {
                (tasks.length > 0) &&
                <div>
                    <h3 className='mb-2 md:mb-4 font-semibold text-sm sm:text-lg xl:text-2xl text-gray-900 dark:text-white'>Tasks</h3>
                    <ul className={`text-xs sm:text-base xl:text-xl max-w-md  list-disc list-inside ${(active) ? "text-gray-800 dark:text-gray-300" : "text-gray-400 dark:text-gray-400"}`}>
                        {tasks.map((task, index) =>
                            <li
                                key={index}>
                                {task}
                            </li>
                        )}
                    </ul>
                </div>
            }
            {
                <TechnologiesTags technologies={technologies} />
            }
        </li>
    )
}

function Work() {

    const workExpList = [
        {
            id: 1,
            timeStr: "Jan 2021 - Now",
            companyLogo: <>
                <CompanyLogoLabel LogoComponent={DeloitteIcon} />
            </>,
            role: "Software Development Engineer in Test II",
            description: "Create a custom python framework for E2E automated tests for an e-commerce web page, testing more than 30 locales using Python, Pytest, Selenium, Docker, Jenkins and API integrations with Google Cloud Platform:",
            tasks: [
                "Create and maintain E2E regression tests.",
                "Create documentation guides about the framework installation and usage.",
                "Create Jira / xray tests, test sets, test plans, test executions.",
                "Run manual user acceptance tests.",
            ],
            technologies: [
                "python", "selenium", "docker", "jenkins"
            ],
            active: true
        },
        {
            id: 2,
            timeStr: "Sept 2020 - Jan 2021",
            companyLogo: <>
                <CompanyLogoLabel LogoComponent={DeloitteIcon} />
            </>,
            role: "Embedded Automotive Test Engineer",
            description: "Develop automated test scripts using the company's internal python framework for testing Instrument Panel Cluster (IPC). Do research and create documentation to help with tests development.",
            active: false
        },
        {
            id: 3,
            timeStr: "June 2019 - Apr 2020",
            companyLogo: <>
                <CompanyLogoLabel LogoComponent={YazakiIcon} />
            </>,
            role: "Automotive Software Test Engineer",
            description: "Test Automation Development for testing Instrument Panel Cluster (IPC) functionality using CAN protocol according to requirements from client (GM). Creation and run of test cases for IPC Indicators. Report and update procedure documentation according to the latest test case version and help the team doing problem-solving.",
            active: false
        }
    ]

    return (
        <section id="work" className="py-16 md:py-20 bg-[var(--bg-color)]">
            <div className='m-auto w-[var(--max-page-width)] max-w-[var(--max-section-width)] bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600  dark:from-teal-400 dark:to-blue-600'>
                <h1 className='text-4xl md:text-3xl xl:text-6xl font-bold mb-6 md:mb-10 text-transparent'>Work Experience</h1>
                <div className='flex justify-center items-center flex-col xl:flex-row xl:items-start'>
                    <div className='pb-16 xl:pb-0 xl:mr-16 flex flex-col gap-4 '>
                        <div className="flex flex-col gap-6 text-md leading-6 tracking-wide md:text-xl xl:text-2xl break-word">
                            <p>
                                I am a passionate software engineer with <strong className="text-transparent">over 3 years</strong> of hands-on experience delivering scalable and maintainable software
                                development in test using <strong className="text-transparent">Python</strong> mainly and <strong className="text-transparent">Javascript</strong>.
                            </p>
                            <p>
                                During my career <strong className="text-transparent">I have worked with the technologies:</strong> Selenium,
                                Pytest, Playwright, Google Cloud APIs, Docker, Jenkins and more.
                            </p>
                            <p>
                                I have also <strong className="text-transparent">developed personal projects</strong> like <strong className="text-transparent">APIs</strong> with FastAPI
                                and <strong className="text-transparent">web pages</strong> using React / NextJS / Tailwind / postgreSQL with Supabase.
                            </p>
                            <p>
                                Always trying to keep my knowledge updated
                                improving my software development skills and learning new things.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center xl:justify-start xl:min-w-[65%]'>
                        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
                            {workExpList.map(job =>
                                <WorkCard
                                    key={job.id}
                                    {...job}
                                />
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work