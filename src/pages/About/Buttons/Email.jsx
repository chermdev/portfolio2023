import { useState } from "react"

export default function EmailContactBtn() {

    const defaultToolTipText = 'Copy to clipboard!'
    const [emailToolTopText, setEmailToolTopText] = useState(defaultToolTipText)

    return (
        <div className='hover:animate-[wiggle_0.5s_ease-in-out_infinite]'>
            <button
                onClick={() => {
                    navigator.clipboard.writeText("contact@emmanuelhdz.com")
                    setEmailToolTopText('Copied!')
                }}
                onMouseLeave={() => {
                    setEmailToolTopText(defaultToolTipText)
                }}
                className="relative inline-flex items-center justify-center text-2xl font-bold rounded-2xl animate-[easeIn_0.6s_ease-in-out_0.7s_both] group px-6 py-1 text-[#0e2550] bg-white bg-opacity-20 outline-2 outline-offset-0 outline-[#0e2550] outline-none hover:text-white hover:outline-0 hover:bg-opacity-100 hover:bg-[#01131d] backdrop-blur-lg shadow-dark/30 shadow-md hover:shadow-black/30 hover:shadow-lg
                dark:text-[#c9e3ec] 
                dark:bg-black 
                dark:outline-[#c9e3ec] 
                dark:hover:text-white 
                dark:bg-opacity-20 
                dark:hover:bg-opacity-100 
                dark:hover:bg-[#01131d] 
                dark:backdrop-blur-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z" /></svg>
                <span className="group-hover:opacity-100 opacity-0 group-hover:visible invisible bg-black/70 rounded-2xl bottom-[115%] absolute text-center transition-opacity font-medium tracking-wider text-sm text-gray-100
                p-2
                ">{emailToolTopText}</span>
            </button>
        </div>
    )
}