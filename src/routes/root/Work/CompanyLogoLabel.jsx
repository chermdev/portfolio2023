export default function CompanyLogoLabel({ LogoComponent, colorStyle = "fill-current" }) {
  return (
    <div className='h-[1.5rem] max-w-[4rem] sm:h-[2rem] sm:max-w-[6rem] lg:h-[2rem] lg:max-w-[8rem] p-[0.3rem] rounded-md'>
      {<LogoComponent className={`h-full w-full ${colorStyle}`} />}
    </div>
  )
}
