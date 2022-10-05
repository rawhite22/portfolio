import Link from 'next/link'
import { useThemeContext } from '../hooks/useThemeContext'
import { useRouter } from 'next/router'

function Header() {
  const { dispatch, sideMenu } = useThemeContext()
  const { pathname } = useRouter()
  const handleBurgerClick = () => {
    if (!sideMenu) {
      dispatch({ type: 'SIDE_MENU_OPEN' })
    } else {
      dispatch({ type: 'SIDE_MENU_CLOSED' })
    }
  }
  return (
    <header className='header'>
      <div className='site-title'>
        <h1>Robert White</h1>
      </div>
      <nav className='nav-container'>
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
      </nav>
      <nav onClick={() => handleBurgerClick()} className='hamburger'>
        <span className={`${sideMenu ? 'open' : ''}`}></span>
        <span className={`${sideMenu ? 'open' : ''}`}></span>
        <span className={`${sideMenu ? 'open' : ''}`}></span>
      </nav>
    </header>
  )
}
export default Header
