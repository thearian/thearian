import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TopBar from '../components/TopBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arian Mirahmadi Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Header />

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
