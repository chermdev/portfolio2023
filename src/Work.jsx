import Section from './Section'
import './Work.css'
import { ReactComponent as YazakiIcon } from './assets/companies/yazaki.svg'
import { ReactComponent as DeloitteIcon } from './assets/companies/deloitte.svg'

function CompanyLogoLabel({ LogoComponent }) {
    return (
        <div className='h-[1.5rem] w-[5rem] p-[0.3rem] rounded-md'>
            {<LogoComponent className='h-full w-full white fill-current' />}
        </div>
    )
}

function TechnologyTag({ children, name }) {

    const colors = {
        python: {
            colorStyle: "bg-[#00b7ff] text-[#00b7ff] border-[#00b7ff]"
        },
        selenium: {
            colorStyle: "bg-[#00ab00] text-[#00ab00] border-[#00ab00]",
        },
        docker: {
            colorStyle: "bg-[#228ee1] text-[#228ee1] border-[#228ee1]"
        },
        jenkins: {
            colorStyle: "bg-[#9d03fc] text-[#9d03fc] border-[#9d03fc]"
        },
        javascript: {
            colorStyle: "bg-[#ead41c] text-[#ead41c] border-[#ead41c]"
        },
        react: {
            colorStyle: "bg-[#5ccfee] text-[#5ccfee] border-[#5ccfee]"
        },
        nextjs: {
            colorStyle: "bg-[#020202] text-[#020202] border-[#020202] dark:bg-[#f2f2f2] dark:text-[#f2f2f2]  dark:border-[#f2f2f2]"
        }
    }

    let colorStyle = (name in colors) ? colors[name].colorStyle : ""

    return (
        <span className={`${colorStyle} text-xs sm:text-sm border flex items-center justify-center bg-opacity-10 dark:bg-opacity-10 px-3 py-1 rounded-md`}>{children}</span>
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
        <li className={`mb-10 ml-2 md:ml-20 border p-6 rounded-lg ${active ? "border-lime-500" : "border-gray-300 dark:border-stone-800"}`}>
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
                (technologies.length > 0) &&
                <ul className='mt-6 flex gap-2 flex-wrap' >
                    {technologies.map((technology, index) =>
                        <TechnologyTag
                            key={index}
                            name={technology}>
                            {technology}
                        </TechnologyTag>
                    )}
                </ul>
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
            companyLogo: deloitteLogo,
            role: "Software Development Engineer in Test II",
            description: "Create a custom python framework for E2E automated tests for an e-commerce web page, testing more than 30 locales using Python, Pytest, Selenium, Docker, Jenkins and API integrations with Google Cloud Platform:",
            tasks: [
                "Create and maintain E2E regression tests.",
                "Create documentation guides about the framework installation and usage.",
                "Create Jira / xray tests, test sets, test plans, test executions.",
                "Run manual user acceptance tests.",
            ],
            technologies: [
                "python", "selenium", "docker", "jenkins",
            ],
            active: true
        },
        {
            id: 2,
            timeStr: "Sept 2020 - Jan 2021",
            companyLogo: deloitteLogo,
            role: "Embedded Automotive Test Engineer",
            description: "Develop automated test scripts using the company's internal python framework for testing Instrument Panel Cluster (IPC). Do research and create documentation to help with tests development.",
            active: false
        },
        {
            id: 3,
            timeStr: "June 2019 - Apr 2020",
            companyLogo: yazakiLogo,
            role: "Automotive Software Test Engineer",
            description: "Test Automation Development for testing Instrument Panel Cluster (IPC) functionality using CAN protocol according to requirements from client (GM). Creation and run of test cases for IPC Indicators. Report and update procedure documentation according to the latest test case version and help the team doing problem-solving.",
            active: false
        }
    ]

    return (
        <Section id="work">
            <div className='pt-20 flex justify-center items-center flex-col xl:flex-row xl:items-start gap-20 xl:gap-0'>
                <div className='xl:mr-20'>
                    <h1 className='text-xl md:text-3xl font-bold mb-5'>Work Experience</h1>
                    <p className='text-xs sm:text-sm md:text-base break-normal text-justify'>awddd dddwwww wwwww www www wwwwwwwwww wwwwwwww wwwwwww wwawddddddww  wwwwww wwww wwww ww wwwwwww wwwwww wwww wwwww wwawdddd ddwwwwww w wwwwwwwwwwww wwwwwww wwwww ww wwwwww wwwawddddddwwwwwww wwwwwww ww wwwwww wwwwww wwwwwww wwwwwwwawddddddw wwwwww wwww wwwwwwww wwwww wwwwww wwwww ww wwwwwa wddddddwwwwwwwwwwww wwwwww wwwwww wwwwwww wwwwww wwwwwawdd ddddwwwww ww wwwww wwwww wwwwwwwwww wwwwww wwwwww www</p>
                </div>
                <div className='max-w-full flex justify-center xl:justify-start xl:min-w-[50%]'>
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
        </Section >
    )
}

export default Work