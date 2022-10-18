import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrowser } from '@fortawesome/pro-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function ProjectList({
  title,
  ghLink,
  appLink,
  portLink,
  projectDescription,
  builtWith,
}) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <div className='link-container'>
        <Link href={ghLink}>
          <a>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
        <Link href={appLink}>
          <a>
            <FontAwesomeIcon icon={faBrowser} />
          </a>
        </Link>
      </div>
      <p>{projectDescription}</p>
      <p>{builtWith}</p>
      <Link href={portLink}>read more...</Link>
    </div>
  )
}
export default ProjectList
