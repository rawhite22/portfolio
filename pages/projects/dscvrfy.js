import SideMenu from '../../components/SideMenu'
import { useThemeContext } from '../../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

function Dscvrfy() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='dscvrfy-page'
      className={`dscvrfy-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>Discoverfy</h2>
        <div className='link-container'>
          <Link href={'https://github.com/rawhite22'}>
            <a>
              <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
          </Link>
          <Link href='https://dailyfootballtracker-drk1.vercel.app/'>
            <a>
              <FontAwesomeIcon icon={faBrowser} /> Application
            </a>
          </Link>
        </div>
        <p>
          <Link href='https://dscvrfy.vercel.app'>Discoverfy</Link> is a music
          discovery tool using the Spotify API. Your top artists and songs from
          the last 4 weeks are compiled to give you a list of recommendations.
        </p>
        <h3>Technologies</h3>
        <p>
          Discoverfy is built using Next.js, Next Auth spotify provider handles
          the authentication. Spotify limits the amount of users until they
          approve the app. Nodemailer is used to request access using Next.js
          API routes.
        </p>
        <p>
          To style the website I used SCSS compiled down to minified css files
        </p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Dscvrfy
