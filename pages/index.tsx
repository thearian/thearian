import type { NextPage } from 'next'
import Head from 'next/head'
import {useState} from 'react'
import {IExperience} from '../@types'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import TopBar from '../components/TopBar'
import {experiences} from '../constants/resume'

const Home: NextPage = () => {
  const [focus, setFocus] = useState<IExperience | null>(null)

  return (
    <div className='bg-black'>
      <Head>
        <title>Arian Mirahmadi</title>
        <meta name="description" content="
            Web Developer, Engineer and  Manager
            Fluent in English
            With +3 years of modern web-dev experience
            and +7 years of web-dev ativity and study
          " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Header />

      <main className='flex flex-col md:flex-row'>
        <SideNav focus={focus} />

        <div className='h-fit md:w-3/4 lg:w-5/6'>
          <div className='flex flex-col md:flex-row md:flex-wrap'>
            { experiences.map((job, i) =>
              <Experience 
                delay={i * 100}
                key={job.challenges.join(" ")}
                data={job}
                onFocus={setFocus}
              />
            ) }
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
