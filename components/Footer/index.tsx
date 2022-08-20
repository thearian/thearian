import type { NextPage } from 'next'
import TechLink from '../TechLink'
import {HeartIcon} from '@heroicons/react/solid'

const Footer: NextPage = () => {
  return (
    <footer className='text-center pb-10'>
      <div className='text-white py-10'>
        <h3 className='text-3xl font-bold text-green-500'>Ask me a question</h3>
        <div className='flex flex-row gap-x-3 justify-center items-center text-lg py-3'>
          <TechLink className='invert' tech='linkedin' id='thearian' size={25} />

          <span className='text-zinc-500'> or </span>

          <a href='mailto://mirarianmir@gmail.com'>mirarianmir@gmail.com</a>
        </div>
      </div>

      <div className='text-zinc-500'>
        <b>ArianM.ir</b>
        <br/>
        Arian Mirahmadi @2022
        <br/>
        Made with <HeartIcon className='inline w-4 h-4' />{' '}
        on <TechLink className='invert inline opacity-50' tech='github' id='thearian/thearian' size={16} />
      </div>
    </footer>
  )
}

export default Footer
