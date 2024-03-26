import React from 'react';
import Icon from './Icon'
import moment from 'moment'
import TechnologyTags from './TechnologyTags'

export default function WorkCard({
  company,
  role,
  description,
  start,
  end = "",
  logo = "",
  tasks = [],
  active = false,
  intern = false,
  tech = []
}) {
  const startDate = moment(start, "YYYY-MM-DD").format("MMM YYYY")
  const endDate = end ? moment(end, "YYYY-MM-DD").format("MMM YYYY") : "Now"
  if (!end) {
    end = moment(moment.now()).format("YYYY-MM-DD")
  }
  const timeDifference = moment(end, "YYYY-MM-DD").from(moment(start, "YYYY-MM-DD"), true)
  return (
    <li className={`overflow-hidden tracking-widest mb-10 ml-2 md:ml-16 rounded-lg ${active ? "border-2 border-teal-400 dark:border-cyan-400" : "border border-gray-300 dark:border-stone-800"}`}>
      <div className={`p-6 xl:p-8 ${active ? "bg-opacity-10 bg-gradient-to-br from-transparent to-teal-400/10 dark:from-transparent dark:to-cyan-400/10" : "bg-slate-500 bg-opacity-10 dark:bg-slate-500 dark:bg-opacity-10"}`}>
        {(active) ?
          (<div className="absolute w-3 h-3 rounded-full mt-1.5 -left-[0.4rem] text-teal-400 bg-teal-500 dark:text-cyan-400 dark:bg-cyan-400 animate-[pulseActive_2s_ease-in-out_infinite]"></div>) :
          (<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-[0.4rem] border border-white dark:border-gray-900 dark:bg-gray-700"></div>)
        }
        <div className='flex flex-col gap-4'>
          <div className='relative flex gap-2 md:gap-4 items-center whitespace-nowrap'>
            <time className={`px-2 py-1 text-xs sm:text-base xl:text-xl font-medium leading-none ${(active) ? "rounded-md px-2 bg-teal-500/10 text-teal-500 dark:text-cyan-400 dark:bg-cyan-400/10" : "text-gray-500 dark:text-gray-500"}`}>{startDate} - {endDate} ({timeDifference})</time>
            <div className='absolute right-0'>
              {<Icon name={logo} /> || company}
            </div>
          </div>
          <h3 className="text-sm sm:text-lg font-semibold xl:text-2xl text-black dark:text-white">{role}</h3>
          {
            (intern) && (
              <div className='flex flex-wrap gap-2 items-center mb-2 md:mb-3 '>
                <span className='border-yellow-500 text-yellow-600 bg-yellow-500 dark:border-yellow-400 dark:text-yellow-400 dark:bg-yellow-400 dark:bg-opacity-10 inline-block rounded-md w-fit py-1 px-3  bg-opacity-10 text-xs sm:text-base md:text-base xl:text-base'>Intern</span>
              </div>
            )
          }
          {
            <TechnologyTags tech={tech} />
          }
        </div>
      </div>
      <div className='p-6'>
        <p className={`mb-4 md:mb-6 text-xs sm:text-base xl:text-xl font-normal text-gray-800 ${(active) ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-400"}`}>{description}</p>
        {
          tasks &&
          <div>
            <h3 className='mb-2 md:mb-3 font-semibold text-sm sm:text-lg xl:text-2xl text-black dark:text-white'>Tasks</h3>
            <ul className={`space-y-1 text-xs sm:text-base xl:text-xl list-disc list-inside ${(active) ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-400"}`}>
              {tasks.map((task, index) =>
                <li
                  key={index}>
                  {task}
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    </li>
  )
}