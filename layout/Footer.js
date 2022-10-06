import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <footer className='footer'>
      <div className='link-container'>
        <Link href={'https://www.linkedin.com/in/robert-white-9a815224b/'}>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href={'https://github.com/rawhite22'}>
          <a>
            {' '}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
      <div className='contact'>
        <Link href='/contact'>robert.a.white625@gmail.com</Link>
      </div>
    </footer>
  )
}
export default Footer
