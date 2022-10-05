import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'

function About() {
  const { pageTransition, sideMenu } = useThemeContext()
  return (
    <main
      id='about-page'
      className={`about-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className='content'>
        <p>About</p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default About
