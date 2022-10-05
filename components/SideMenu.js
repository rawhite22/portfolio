import Link from 'next/link'
import { useRouter } from 'next/router'

function SideMenu({ sideMenu }) {
  const { pathname } = useRouter()
  return (
    <div className={`side-menu ${sideMenu ? 'open' : 'closed'}`}>
      <ul>
        <li className={`${pathname === '/' ? 'active' : ''}`}>
          <Link href='/'>Home</Link>
        </li>
        <li className={`${pathname === '/about' ? 'active' : ''}`}>
          <Link href='/about'>About</Link>
        </li>
        <li className={`${pathname === '/projects' ? 'active' : ''}`}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={`${pathname === '/contact' ? 'active' : ''}`}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
export default SideMenu
