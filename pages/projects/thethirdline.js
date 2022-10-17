import SideMenu from '../../components/SideMenu'
import { useThemeContext } from '../../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

function Thethirdline() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='dscvrfy-page'
      className={`dscvrfy-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>The Third Line</h2>
        <div className='link-container'>
          <Link href={'https://github.com/rawhite22'}>
            <a>
              <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
          </Link>
          <Link href='https://thethirdlinehockey.vercel.app/'>
            <a>
              <FontAwesomeIcon icon={faBrowser} /> Application
            </a>
          </Link>
        </div>
        <p>
          The Third Line is a free-to-use fantasy hockey research tool. Using
          the NHL stats API, players and team stats are always up to date. Users
          can register for the site giving them access to a player watch list
          feature. Users can watch up to five players at a time. If a user
          forgets their password they have an option to have a reset password
          link emailed to them.
        </p>
        <h3>Technologies</h3>
        <p>
          The Third Line is built using Next.js, Next Auth custom email and
          password provider handles the authentication. MongoDb stores the users
          data. Nodemailer and Json Web Token are used to handle the password
          reset.
        </p>
        <p>
          To style the website I used SCSS and custom media queries for a
          responsive design.
        </p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Thethirdline
