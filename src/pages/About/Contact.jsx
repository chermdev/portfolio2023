import LinkedinContactBtn from './Buttons/LinkedIn'
import EmailContactBtn from './Buttons/Email'

export default function Contact() {
    return (
        <div className='flex flex-col gap-2 md:gap-4 justify-center items-center bg-gradient-to-r bg-clip-text from-teal-400 to-teal-600 dark:from-sky-500 dark:to-blue-500 text-2xl font-medium tracking-wide'>
            <h2 className='animate-[easeIn_0.6s_ease-in-out_0.7s_both]'>Contact me:</h2>
            <div className='flex flex-row gap-4'>
                <LinkedinContactBtn />
                <EmailContactBtn />
            </div>
        </div>
    )
}