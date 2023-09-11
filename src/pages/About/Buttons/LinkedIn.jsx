import { ReactComponent as LinkedinIcon } from '/src/assets/logos/technologies/linkedin.svg'

export default function LinkedinContactBtn() {
    return (
        <div className='hover:animate-[wiggle_0.5s_ease-in-out_infinite] '>
            <a href="https://www.linkedin.com/in/emmanuelhdz"
                target="_blank"
                alt="linkedin"
                className="inline-flex
                items-center
                justify-center
                text-2xl
                font-bold
                rounded-2xl
                animate-[easeIn_0.6s_ease-in-out_0.7s_both]
                group
                px-6
                py-1

                text-[#0e2550]
                bg-white
                bg-opacity-20
                outline-2
                outline-offset-0
                outline-[#0e2550]
                outline-none
                hover:text-white
                hover:outline-0
                hover:bg-opacity-100
                hover:bg-[#0aa3f6]
                backdrop-blur-lg

                dark:text-[#c9e3ec]
                dark:bg-black
                dark:outline-[#c9e3ec]
                dark:hover:text-white
                dark:bg-opacity-20
                dark:hover:bg-opacity-100
                dark:hover:bg-[#00a4fc]
                dark:backdrop-blur-lg

                shadow-dark/30
                shadow-md
                hover:shadow-black/30
                hover:shadow-lg
                ">

                <LinkedinIcon className="fill-current w-[2.5rem] h-[2.5rem]" />
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
                ">Go to Linkedin!</span>
            </a>
        </div>
    )
}