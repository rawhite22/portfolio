import { useThemeContext } from '../hooks/useThemeContext'
import SideMenu from '../components/SideMenu'
function Projects() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='projects-page'
      className={`projects-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className='content'>
        <p>Projects</p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Projects
