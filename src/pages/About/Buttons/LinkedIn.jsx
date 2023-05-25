import { ReactComponent as LinkedinIcon } from '/src/assets/logos/technologies/linkedin.svg'

export default function LinkedinContactBtn() {
    return (
        <div className='hover:animate-[wiggle_0.2s_ease-in-out_infinite] '>
            <a href="https://www.linkedin.com/in/emmanuelhdz" target="_blank" alt="linkedin" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 animate-[easeIn_0.6s_ease-in-out_0.3s_both,slideFromLeft_0.6s_ease-in-out_0.3s_both]">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[0.9rem] group-hover:bg-opacity-0">
                    <LinkedinIcon className="fill-current w-[3rem] h-[3rem]" />
                </span>
            </a>
        </div>
    )
}