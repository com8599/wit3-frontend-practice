import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Global.style'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    </>
  )
}

export default MyApp
