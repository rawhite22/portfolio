import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'

export default function Home() {
  const { pageTransition, sideMenu } = useThemeContext()

  return (
    <main
      id='home-page'
      className={`home-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className='content'>
        <p>Home</p>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
