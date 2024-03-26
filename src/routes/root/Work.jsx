import './Work.css'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
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