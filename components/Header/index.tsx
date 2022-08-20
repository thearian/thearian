import type { NextPage } from 'next'
import Image from 'next/image'

const Header: NextPage = () => {
  return (
      <header className='flex flex-col md:flex-row justify-start p-7 gap-y-10 md:gap-x-10'>
        <div className='w-full text-center md:w-1/4 lg:w-1/6 px-7 md:px-0'>
          <Image
            className='rounded-full w-full'
            alt="Arian Profile"
            width={2200}
            height={2200}
            src="https://arian.storage.iran.liara.space/arianm/profile.jpg"
          />
        </div>

        <div className='flex flex-col justify-center gap-y-10 md:gap-y-3'>
          <h1 className='text-5xl text-green-500 md:text-3xl font-[Montserrat] text-center md:text-start font-bold'>
            Arian Mirahmadi
          </h1>

          <p className='text-zinc-500'>
            Web Developer, Engineer and  Manager <br/>
            Fluent in English <br/>
            With <b>+3 years</b> of modern web-dev experience
            and <b>+7 years</b> of web-dev ativity and study
          </p>
        </div>
      </header>
  )
}

export default Header
