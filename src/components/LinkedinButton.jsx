import { ReactComponent as LinkedinIcon } from '../assets/logos/linkedin.svg'
import IconButton from './IconButton'

export default function LinkedinButton() {
    return (
        <IconButton className='bg-white dark:bg-black text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] hover:text-white hover:bg-opacity-100 dark:hover:bg-opacity-100' href="https://www.linkedin.com/in/emmanuelhdz/" target="_blank" alt="linkedin">
            <LinkedinIcon />
        </IconButton>
    )
}