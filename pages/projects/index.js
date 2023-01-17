import { useThemeContext } from '../../hooks/useThemeContext'
import SideMenu from '../../components/SideMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import HeadComponent from '../../components/Head'
import ProjectList from '../../components/ProjectList'
function Projects() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='projects-page'
      className={`projects-container ${pageTransition ? 'hide' : 'show'}`}>
      <HeadComponent title={'Robert White | Projects'} />
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>Projects</h2>
        <ProjectList
          title='DFS Stat Tracker'
          ghLink='https://github.com/rawhite22/dailyfootballtracker'
          appLink='https://dailyfootballtracker-drk1.vercel.app/'
          portLink='/projects/dfsstattracker'
          projectDescription='Daily fantasy sports stats tracker'
          builtWith='Built using Next.js MongoDB. DFS stat tracker is a simple tool to
            track your spending on players salary versus the production
            you&#39;re getting from that position.'
        />
        <ProjectList
          title='Hockey Stat Repository'
          ghLink='https://github.com/rawhite22/hockey_stat_scripts'
          appLink={null}
          portLink='/projects/hockeystatrepo'
          projectDescription='NHl Research command line tool'
          builtWith='JavaScript es6+, Node.js, Git'
        />
        <ProjectList
          title='The Third Line'
          ghLink='https://github.com/rawhite22/thethirdlinehockey'
          appLink='https://thethirdlinehockey.vercel.app/'
          portLink='/projects/thethirdline'
          projectDescription='Fantasy Hockey research tool using the unofficial NHL stats API.'
          builtWith='Built using Next.js, Next Auth custom credentials
            provider, Nodemailer, Next.js API routes'
        />
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Projects
