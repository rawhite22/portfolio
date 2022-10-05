import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'
import { useState } from 'react'
function Contact() {
  const { pageTransition, sideMenu } = useThemeContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('sending')
    let data = { name, email, message }

    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await res.json()
    console.log(resData)
  }
  return (
    <main
      id='contact-page'
      className={`contact-container ${pageTransition ? 'hide' : 'show'}`}>
      <div className='content'>
        <p>Contact</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Contact
