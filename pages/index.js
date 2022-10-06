import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
export default function Home() {
  const { pageTransition, sideMenu } = useThemeContext()

  return (
    <main
      id='home-page'
      className={`home-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <div className='intro'>
          <h2>Hello, I'm Robert</h2>
          <p>I'm a full stack developer, living in the Raliegh-Durhman area.</p>
        </div>
        <div className='link-container'>
          <Link href={'/'}>
            <a>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              {' '}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </div>
        <div className='about'>
          <h2>About</h2>
          <p>
            I am a self taught developer with a passion JavaScript. I enjoy
            working with React and Next.js, or building API's with Node.js and
            express. I enjoy learning new technologies, and working to become a
            better developer everyday.
          </p>
          <p>
            Outside of working on becoming a better developer. I enjoy spending
            time with my dogs, fantasy sports, and finding new music. I have a
            passion for sports data analytics, and using that research to
            develop fantasy sports strategies.
          </p>
        </div>
        <div className='featured-project'>
          <h2>Featured Project</h2>
          <h3>DFS Stat Tracker</h3>
          <p>
            Built using Next.js MongoDB. DFS stat tracker is a simple tool to
            track your spending on players salry versus the production you're
            getiing from that position.
          </p>
          <Link href='/projects/dfsstattracker'>read more...</Link>
        </div>
      </div>

      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
