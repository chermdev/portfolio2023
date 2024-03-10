import './Work.css'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ReactComponent as YazakiIcon } from '../../assets/logos/companies/yazaki.svg'
import { ReactComponent as DeloitteIcon } from '../../assets/logos/companies/deloitte.svg'
import CompanyLogoLabel from './Work/CompanyLogoLabel'
import WorkCard from './Work/WorkCard'

const SUPA_URL = import.meta.env.VITE_SUPA_URL
const SUPA_KEY = import.meta.env.VITE_SUPA_KEY

const supabase = createClient(SUPA_URL, SUPA_KEY)


async function getWorkExp(setWorkExp) {
  const { data } = await supabase.from("work_exp").select()
  setWorkExp(data)
}


function Work() {

  const [workExpList, setWorkExp] = useState([]);


  useEffect(() => {
    // run getWorkExp only if workExp is empty
    if (workExpList.length === 0) {
      getWorkExp(setWorkExp)
    }

  }, [])


  console.log(workExpList)


  // const workExpList = [
  //   {
  //     id: 1,
  //     timeStr: "Jan 2021 - Now",
  //     companyLogo: <>
  //       <CompanyLogoLabel LogoComponent={DeloitteIcon} />
  //     </>,
  //     role: "Software Development Engineer in Test II",
  //     description: "Create automated E2E user acceptance tests for an e-commerce web page, testing more than 30 locales in multiple languages using Python, Pytest, Selenium, Docker, Jenkins and API from Google:",
  //     tasks: [
  //       "Develop and maintain end-to-end regression tests.",
  //       "Create new test cases based on client's new functionalities.",
  //       "Keep tests up-to-date with page changes.",
  //       "Develop custom pytest plugins to generate customized HTML and Excel reports.",
  //       "Create Python scripts for various automation tasks, including converting tests from an Excel document into a CSV format compatible with Jira for test uploads.",
  //       "Write documentation for framework installation and usage.",
  //       "Create and manage Jira tests, test sets, test plans, and test executions.",
  //       "Do manual testing when necessary to ensure product quality."
  //     ],
  //     technologies: [
  //       "python", "selenium", "docker", "jenkins"
  //     ],
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     timeStr: "Sept 2020 - Jan 2021",
  //     companyLogo: <>
  //       <CompanyLogoLabel LogoComponent={DeloitteIcon} />
  //     </>,
  //     role: "Embedded Automotive Test Engineer",
  //     description: "Develop automated test scripts using the company's internal python framework for testing Instrument Panel Cluster (IPC). Do research and create documentation to help with tests development.",
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     timeStr: "June 2019 - Apr 2020",
  //     companyLogo: <>
  //       <CompanyLogoLabel LogoComponent={YazakiIcon} />
  //     </>,
  //     role: "Automotive Software Test Engineer",
  //     description: "Test Automation Development for testing Instrument Panel Cluster (IPC) functionality using CAN protocol according to requirements from client (GM). Creation and run of test cases for IPC Indicators. Report and update procedure documentation according to the latest test case version and help the team doing problem-solving.",
  //     active: false,
  //     intern: true
  //   }
  // ]

  return (
    <section id="work" className="py-16 md:py-20 bg-bgcolor">
      <div className='m-auto w-[var(--max-page-width)] max-w-[var(--max-section-width)]'>
        <h1 className='w-fit bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600  dark:from-cyan-400 dark:to-cyan-600 text-4xl md:text-3xl xl:text-6xl font-bold mb-6 md:mb-10 text-transparent'>Work Experience</h1>
        <div className='flex justify-center items-center flex-col xl:flex-row xl:items-start'>
          <div className='pb-16 xl:pb-0 xl:mr-16 flex flex-col gap-4 '>
            <div className="bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600  dark:from-cyan-400 dark:to-cyan-600 flex flex-col gap-6 text-md leading-6 tracking-wide md:text-xl xl:text-2xl break-word">
              <p>
                I am a passionate software engineer with <strong className="text-transparent">over 2 years</strong> of hands-on experience delivering scalable and maintainable software
                development in test using <strong className="text-transparent">Python</strong>.
              </p>
              <p>
                During my career <strong className="text-transparent">I have worked with the technologies:</strong> Selenium,
                Pytest, Google Cloud APIs, Docker, Jenkins and more.
              </p>
              <p>
                I have also <strong className="text-transparent">developed personal projects</strong> like <strong className="text-transparent">APIs</strong> with FastAPI
                and <strong className="text-transparent">web pages</strong> using React, Tailwind and Supabase.
              </p>
              <p>
                Always trying to keep my knowledge updated
                improving my software development skills and learning new things.
              </p>
            </div>
          </div>
          <div className='flex justify-center xl:justify-start xl:min-w-[65%]'>
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
              {
                workExpList.sort((a, b) => Date.parse(b.start) - Date.parse(a.start))
                  .map(job =>
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