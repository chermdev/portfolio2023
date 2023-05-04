import './Work.css'
import { ReactComponent as YazakiIcon } from './assets/companies/yazaki.svg'
import { ReactComponent as DeloitteIcon } from './assets/companies/deloitte.svg'
import { ReactComponent as PythonIcon } from './assets/logos/python-color.svg'
import { ReactComponent as SeleniumIcon } from './assets/logos/selenium-color.svg'
import { ReactComponent as DockerIcon } from './assets/logos/docker-color.svg'
import { ReactComponent as JenkinsIcon } from './assets/logos/jenkins-color.svg'
import { ReactComponent as JavascriptIcon } from './assets/logos/javascript-color.svg'
import { ReactComponent as ReactIcon } from './assets/logos/react-color.svg'
import { ReactComponent as NextJSIcon } from './assets/logos/nextjs.svg'
import { ReactComponent as DjangoIcon } from './assets/logos/django-color.svg'


function CompanyLogoLabel({ LogoComponent, colorStyle = "fill-current" }) {
    return (
        <div className='h-[1.5rem] max-w-[5rem] p-[0.3rem] rounded-md'>
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
        <span className={`flex items-center justify-center w-[25px] h-[25px] ${bgColor} rounded-md overflow-hidden p-[2px]`}>
            <IconSelected />
        </span>
    )
}

function TechnologiesTags({ technologies }) {



    return (
        (technologies.length > 0) &&
        <ul className='mt-6 flex gap-2 flex-wrap' >
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
                (<div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-lime-500 animation-pulse"></div>) :
                (<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>)
            }
            <div className='flex gap-2 items-center mb-4 md:mb-2'>
                <time className={`text-xs sm:text-sm font-normal leading-none ${(active) ? "text-lime-500" : "text-gray-400 dark:text-gray-500"}`}>{timeStr}</time>
                {companyLogo}
            </div>
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">{role}</h3>
            <p className={`mb-4 text-xs sm:text-base font-normal text-gray-800 ${(active) ? "text-gray-800 dark:text-gray-300" : "text-gray-400 dark:text-gray-400"}`}>{description}</p>
            {
                (tasks.length > 0) &&
                <div>
                    <h3 className='mb-2 font-semibold text-sm sm:text-lg text-gray-900 dark:text-white'>Tasks</h3>
                    <ul className={`text-xs sm:text-base max-w-md  list-disc list-inside ${(active) ? "text-gray-800 dark:text-gray-300" : "text-gray-400 dark:text-gray-400"}`}>
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

    const deloitteLogo = <CompanyLogoLabel LogoComponent={DeloitteIcon} />

    const yazakiLogo = <CompanyLogoLabel LogoComponent={YazakiIcon} />

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
        <section id="work" className="flex justify-center pt-16 sm:pt-20 bg-[var(--bg-color)]">
            <div className='w-[var(--max-page-width)] max-w-[var(--max-section-width)] m-auto py-5 flex justify-center items-center flex-col xl:flex-row xl:items-start gap-10 xl:gap-0'>
                <div className='xl:mr-16'>
                    <h1 className='text-xl md:text-3xl font-bold mb-5'>Work Experience</h1>
                    <p className='text-xs sm:text-sm md:text-base break-normal text-justify'>awddd dddwwww wwwww www www wwwwwwwwww wwwwwwww wwwwwww wwawddddddww  wwwwww wwww wwww ww wwwwwww wwwwww wwww wwwww wwawdddd ddwwwwww w wwwwwwwwwwww wwwwwww wwwww ww wwwwww wwwawddddddwwwwwww wwwwwww ww wwwwww wwwwww wwwwwww wwwwwwwawddddddw wwwwww wwww wwwwwwww wwwww wwwwww wwwww ww wwwwwa wddddddwwwwwwwwwwww wwwwww wwwwww wwwwwww wwwwww wwwwwawdd ddddwwwww ww wwwww wwwww wwwwwwwwww wwwwww wwwwww www</p>
                </div>
                <div className='flex justify-center xl:justify-start xl:min-w-[50%]'>
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
        </section>
    )
}

export default Work