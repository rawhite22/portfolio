import SideMenu from '../../components/SideMenu'
import { useThemeContext } from '../../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

function dfsstattracker() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='dfs-page'
      className={`dfs-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>DFS Tracker</h2>
        <div className='link-container'>
          <Link href={'https://github.com/rawhite22'}>
            <a>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
          <Link href='https://dailyfootballtracker-drk1.vercel.app/'>
            <a>
              <FontAwesomeIcon icon={faBrowser} />
            </a>
          </Link>
        </div>
        <p>
          DFS Tracker is a simple app for a group of friends and I to track how
          are weekly daily fantasy teams do.
        </p>
        <h3>Technologies</h3>
        <p>
          DFS Tracker is built using Next.js.Custom Next Auth login handles the
          authentication along with JWT for the admin user to enter the scores
          for the week.
        </p>
        <p>
          To style the website I used SCSS compiled down to minified css files
        </p>
        <p>
          Next.js API routes is used to connect to MongoDB to handle data
          storage
        </p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default dfsstattracker
