import SideMenu from '../../components/SideMenu'
import { useThemeContext } from '../../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

const Hockeystatrepo = () => {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='dscvrfy-page'
      className={`dscvrfy-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>Hockey Stats Repository</h2>
        <div className='link-container'>
          <Link href={'https://github.com/rawhite22/hockey_stat_scripts'}>
            <a>
              <FontAwesomeIcon icon={faGithub} /> Source Code
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
          Built usings JavaScript es6+ modules and Node.js. Data fetched from
          the NHL stats API using axios a promise based HTTP client. Command
          line arguments provied a more customizable search.
        </p>
        <p>
          The command line is styled with npm packages node-emoji and chalk.js.
        </p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Hockeystatrepo
