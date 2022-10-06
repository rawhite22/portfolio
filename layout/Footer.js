import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <footer className='footer'>
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
      <div className='contact'>
        <Link href='/contact'>robert.a.white625@gmail.com</Link>
      </div>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'>
        Powered by <span>Vercel</span>
      </a>
    </footer>
  )
}
export default Footer
