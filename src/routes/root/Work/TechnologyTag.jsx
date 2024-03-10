import { ReactComponent as PythonIcon } from '../../../assets/logos/technologies/python-color.svg'
import { ReactComponent as SeleniumIcon } from '../../../assets/logos/technologies/selenium-color.svg'
import { ReactComponent as DockerIcon } from '../../../assets/logos/technologies/docker-color.svg'
import { ReactComponent as JenkinsIcon } from '../../../assets/logos/technologies/jenkins-color.svg'
import { ReactComponent as JavascriptIcon } from '../../../assets/logos/technologies/javascript-color.svg'
import { ReactComponent as TypescriptIcon } from '../../../assets/logos/technologies/typescript-color.svg'
import { ReactComponent as PlaywrightIcon } from '../../../assets/logos/technologies/playwright.svg'
import { ReactComponent as ReactIcon } from '../../../assets/logos/technologies/react-color.svg'
import { ReactComponent as NextJSIcon } from '../../../assets/logos/technologies/nextjs.svg'
import { ReactComponent as DjangoIcon } from '../../../assets/logos/technologies/django-color.svg'

const technologyIcons = {
  python: {
    icon: PythonIcon
  },
  selenium: {
    icon: SeleniumIcon,
    color: "bg-[#59b943]"
  },
  docker: {
    icon: DockerIcon,
    color: "bg-[#2396ed]"
  },
  jenkins: {
    icon: JenkinsIcon,
    color: "bg-[#f0d6b7]"
  },
  javascript: {
    icon: JavascriptIcon,
    color: "bg-[#f7df1e]"
  },
  typescript: {
    icon: TypescriptIcon,
    color: "bg-[#007acc]"
  },
  playwright: {
    icon: PlaywrightIcon,
    color: "bg-[#2e4c5b]"
  },
  react: {
    icon: ReactIcon
  },
  nextjs: {
    icon: NextJSIcon
  },
  django: {
    icon: DjangoIcon,
    color: "bg-[#092e20]"
  }
}


export default function TechnologyTag({ name }) {

  const IconSelected = technologyIcons[name].icon
  const IconBgColor = technologyIcons[name]?.color
  const bgColor = IconBgColor != undefined ? IconBgColor : "bg-gray-200 dark:bg-gray-800"
  return (
    <span className={`flex items-center justify-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] ${bgColor} rounded-md overflow-hidden p-[2px]`}>
      <IconSelected />
    </span>
  )
}