import SideMenu from '../components/SideMenu'
import { useThemeContext } from '../hooks/useThemeContext'
import { useState } from 'react'
import HeadComponent from '../components/Head'
function Contact() {
  const { pageTransition, sideMenu } = useThemeContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSending(true)
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
    if (resData.msg === 'success') {
      setSending(false)
      setEmail('')
      setName('')
      setMessage('')
      setError(null)
    }
  }
  return (
    <main
      id='contact-page'
      className={`contact-container ${pageTransition ? 'hide' : 'show'}`}>
      <HeadComponent title={'Robert White | Contact'} />
      <div className={`content ${sideMenu ? 'menu-open' : null}`}>
        <h2>Let&#39;s Connect</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              required
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              required
              className='message'
              type='text'
              name='message'
              rows='15'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input type='submit' value='Send' />
        </form>
      </div>
      <SideMenu sideMenu={sideMenu} />
    </main>
  )
}
export default Contact
