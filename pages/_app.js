import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ThemeContextProvider } from '../context/ThemeContext'
import Layout from '../layout'
import '../styles/global.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  )
}

export default MyApp
