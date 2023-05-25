import LinkedinContactBtn from './Buttons/LinkedIn'
import EmailContactBtn from './Buttons/Email'

export default function Contact() {
    return (
        <div className='flex flex-col gap-2 md:gap-4'>
            <h2>Contact me:</h2>
            <div className='flex flex-row gap-2 md:gap-4'>
                <LinkedinContactBtn />
                <EmailContactBtn />
            </div>
        </div>
    )
}