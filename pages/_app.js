import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically
import { ThemeContextProvider } from '../context/ThemeContext'
import Layout from '../layout'
import '../styles/global.min.css'
import HeadComponent from '../components/Head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <HeadComponent title={'Robert White'} />
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  )
}

export default MyApp
