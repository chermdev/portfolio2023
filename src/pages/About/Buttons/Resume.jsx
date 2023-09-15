import React, { useState, useEffect } from 'react';

export default function ResumeContactBtn() {

    const [isRolled, setIsRolled] = useState(true)
    const [rolled, setRolled] = useState(0)

    useEffect(() => {
        // if rolled is > 0 then setIsRolled = true
        if (rolled >= 1) {
            setIsRolled(true)
        }
    }, [rolled])

    return (
        <div className={`animate-[easeIn_0.6s_ease-in-out_0.5s_both] flex flex-col items-center gap-4 ${(rolled > 0) ? "bg-purple-500 bg-opacity-10 backdrop-blur-xl p-6 rounded-2xl shadow-xl" : ""} `}>
            {
                (rolled == 1) && (
                    <>
                        <img className='rounded-xl max-w-[200px]' src={"https://media.tenor.com/RpghvJN-ucgAAAAM/sorry.gif"} />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ObT1Sj8v_RmDScWa" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen autoplay></iframe>
                        <p className="text-md md:text-xl font-medium tracking-wider leading-tight  text-white">
                            Little joke, here is the CV:
                        </p>
                    </>
                )
            }


            <button
                onClick={() => {
                    if (!isRolled) {
                        // window.open("https://youtu.be/dQw4w9WgXcQ?si=FXRQXFYEcpaWq6vx", "_blank")
                        setRolled(rolled + 1)
                    }
                    else {
                        window.open("https://drive.google.com/file/d/1pl2hFscsL_de1a6o6zHLBx5l-YOfhcuR", "_blank")
                    }
                }}
                target='_blank'
                alt="cv"
                className="
                w-fit
                inline-flex
            items-center
            justify-center
            text-2xl
            font-bold
            rounded-2xl
            hover:animate-[wiggle_0.5s_ease-in-out_infinite] 
            group
            px-6
            py-1
            text-[#de2d2d]
            bg-white
            bg-opacity-20
            outline-2
            outline-offset-0
            outline-[#de2d2d]
            outline-none
            hover:text-white
            hover:outline-0
            hover:bg-opacity-100
            hover:bg-[#d61818]
            backdrop-blur-lg

            dark:text-[#f34545]
            dark:bg-black
            dark:outline-[#f34545]
            dark:hover:text-white
            dark:bg-opacity-20
            dark:hover:bg-opacity-100
            dark:hover:bg-[#d61818]
            dark:backdrop-blur-lg

            shadow-dark/30
            shadow-md
            hover:shadow-black/30
            hover:shadow-lg
                ">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z" fill="currentColor" /></svg>
                <span class="
                group-hover:opacity-100
                opacity-0
                group-hover:visible
                invisible
                bg-black/70
                rounded-2xl
                bottom-[115%]
                absolute
                text-center
                transition-opacity
                font-medium
                tracking-wider
                text-sm
                text-gray-100
                p-2
                ">Open CV!</span>
            </button>
        </div >
    )
}