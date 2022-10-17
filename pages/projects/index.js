import { useThemeContext } from '../../hooks/useThemeContext'
import SideMenu from '../../components/SideMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
function Projects() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='projects-page'
      className={`projects-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>Projects</h2>
        <div className='project'>
          <h3>DFS Stat Tracker</h3>
          <div className='link-container'>
            <Link href='https://github.com/rawhite22/dailyfootballtracker'>
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
          <p>Daily fantasy sports stats tracker</p>
          <p>
            Built using Next.js MongoDB. DFS stat tracker is a simple tool to
            track your spending on players salary versus the production
            you&#39;re getting from that position.
          </p>
          <Link href='/projects/dfsstattracker'>read more...</Link>
        </div>
        <div className='project'>
          <h3>Discoverfy</h3>
          <div className='link-container'>
            <Link href='https://github.com/rawhite22/dscvrfy'>
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href='https://dscvrfy.vercel.app/'>
              <a>
                <FontAwesomeIcon icon={faBrowser} />
              </a>
            </Link>
          </div>
          <p>Music Discovery app using the Spotify API.</p>
          <p>
            Built using Next.js, Next Auth spotify provider,Nodemailer,Next.js.
            API routes
          </p>

          <Link href='/projects/dscvrfy'>read more...</Link>
        </div>
        <div className='project'>
          <h3>The Third Line</h3>
          <div className='link-container'>
            <Link href='https://github.com/rawhite22/thethirdlinehockey'>
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href='https://thethirdlinehockey.vercel.app/'>
              <a>
                <FontAwesomeIcon icon={faBrowser} />
              </a>
            </Link>
          </div>
          <p>
            Fantasy Hockey research tool using the unofficial NHL stats API.
          </p>
          <p>
            Built using Next.js, Next Auth custom credentials
            provider,Nodemailer,Next.js. API routes
          </p>

          <Link href='/projects/thethirdline'>read more...</Link>
        </div>
      </div>

      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Projects
