import type { NextPage } from 'next'
import Head from 'next/head'
import {useState} from 'react'
import {IExperience} from '../components/@types'
import Experience from '../components/Experience'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import TopBar from '../components/TopBar'
import {experiences} from '../public/resume'

const Home: NextPage = () => {
  const [focus, setFocus] = useState<IExperience | null>(null)

  return (
    <div>
      <Head>
        <title>Arian Mirahmadi Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Header />

      <main className='flex flex-col md:flex-row'>
        <SideNav focus={focus} />

        <div className='h-fit md:w-3/4 lg:w-5/6 flex flex-col md:flex-row md:flex-wrap'>
          { experiences.map(job =>
            <Experience key={job.company} data={job} onFocus={setFocus} />
          ) }
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
