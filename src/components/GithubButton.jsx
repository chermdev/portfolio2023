import { ReactComponent as GithubIcon } from '../assets/logos/github.svg'
import IconButton from './IconButton'

export default function GithubButton() {
    return (
        <IconButton className='bg-white dark:bg-black text-white hover:text-white dark:hover:text-white hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:bg-black' href="https://github.com/chermdev" target="_blank" alt="github">
            <GithubIcon className="fill-current" />
        </IconButton>
        // <a className='flex items-center justify-center w-[32px] h-[32px] rounded-md p-[2px] bg-black text-white bg-opacity-20 hover:bg-opacity-100 transition-all duration-300' href="https://github.com/chermdev" target="_blank" alt="github">
        // </a>
    )
}