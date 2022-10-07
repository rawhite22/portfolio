import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import HeadComponent from '../components/Head'
export default function Home() {
  const { pageTransition, sideMenu } = useThemeContext()

  return (
    <main
      id='home-page'
      className={`home-container ${pageTransition ? 'hide' : 'show'}`}>
      <HeadComponent title={'Robert White | Home'} />
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <div className='intro'>
          <h2>Hello, I&#39;m Robert</h2>
          <p>
            I&#39;m a full stack developer, living in the Raliegh-Durham area.
          </p>
        </div>
        <div className='link-container'>
          <Link href='https://www.linkedin.com/in/robert-white-9a815224b/'>
            <a>
              <FontAwesomeIcon classname='welcome-links' icon={faLinkedin} />
            </a>
          </Link>
          <Link href='https://github.com/rawhite22'>
            <a>
              {' '}
              <FontAwesomeIcon classname='welcome-links' icon={faGithub} />
            </a>
          </Link>
        </div>
        <div className='about'>
          <h2>About</h2>
          <p>
            I am a self-taught developer with a passion for JavaScript. I enjoy
            working with React and Next.js, or building APIs with Node.js and
            express. I enjoy learning new technologies and working to become a
            better developer daily.
          </p>
          <p>
            Outside of working on becoming a better developer. I enjoy spending
            time with my dogs, fantasy sports, and finding new music. I am
            passionate about sports data analytics and using that research to
            develop fantasy sports strategies.
          </p>
        </div>
        <div className='featured-project'>
          <h2>Featured Project</h2>
          <h3>DFS Stat Tracker</h3>
          <p>
            Built using Next.js MongoDB. DFS stat tracker is a simple tool to
            track your spending on players' salary versus the production
            you&#39;re getting from that position.
          </p>
          <Link href='/projects/dfsstattracker'>read more...</Link>
        </div>
      </div>

      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
