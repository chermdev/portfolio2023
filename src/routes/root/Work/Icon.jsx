import CompanyLogoLabel from './CompanyLogoLabel'
import { ReactComponent as Yazaki } from '/src/assets/logos/companies/yazaki.svg'
import { ReactComponent as Deloitte } from '/src/assets/logos/companies/deloitte.svg'
import { ReactComponent as Zoolatech } from '/src/assets/logos/companies/zoolatech.svg'

const logos = {
  "yazaki": Yazaki,
  "deloitte": Deloitte,
  "zoolatech": Zoolatech
}

export default function Icon({ name }) {
  const LogoComponent = logos[name] || null;
  return <CompanyLogoLabel LogoComponent={LogoComponent} />
}