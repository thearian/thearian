import type { NextPage } from 'next'
import TechLink from '../TechLink'

const TopBar: NextPage = () => {
  return (
    <div className='w-full flex justify-between p-1'>
      <span className='text-gray-900'>
        <b>Arian M.ir</b>
      </span>

      <div className='flex flex-row gap-x-3 opacity-90'>
        <TechLink tech='github' id='thearian' />
        <TechLink tech='linkedin' id='thearian' />
        <TechLink tech='twitter' id='thearian' />
      </div>
    </div>
  )
}

export default TopBar
