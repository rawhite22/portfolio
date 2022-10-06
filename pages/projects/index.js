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
          <Link href='/'>
            <a>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <FontAwesomeIcon icon={faBrowser} />
            </a>
          </Link>
          <p>
            Built using Next.js MongoDB. DFS stat tracker is a simple tool to
            track your spending on players salry versus the production you're
            getiing from that position.
          </p>
          <Link href='/projects/dfsstattracker'>read more...</Link>
        </div>
        <div className='project'>
          <h3>Discoverfy</h3>
          <Link href='/'>
            <a>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <FontAwesomeIcon icon={faBrowser} />
            </a>
          </Link>
          <p>
            Built using Next.js, Next Auth spotify provider,Nodemailer,Next.js
            API routes
          </p>
          <Link href='/projects/dscvrfy'>read more...</Link>
        </div>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Projects
