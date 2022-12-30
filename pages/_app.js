import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import '../styles/prism.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.asPath === '/') {
    return (
      <>
        <Head>
          <title>Coda Bool</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.gif" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.gif" />
        </Head>
        <body style={{color: 'white', backgroundColor: '#16191A', height: '100%', width: '100%'}}>
          <Component {...pageProps} />
        </body>
      </>
    )
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    }}>
      <Head>
        <title>Coda Bool</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.gif" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.gif" />
      </Head>
      <Navigation />
      <main style={{flex: 1}}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      {router.asPath.includes('/blog') ? null : <Footer />}
    </div>
  )
}