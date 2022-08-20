import type { NextPage } from 'next'
import TechLink from '../TechLink'

const TopBar: NextPage = () => {
  return (
    <div className='w-full flex justify-between p-1'>
      <span className='text-gray-300'>
        <b>Arian M</b>.ir
      </span>

      <div className='flex flex-row gap-x-3 opacity-90'>
        <TechLink className='invert' tech='github' id='thearian' />
        <TechLink className='invert' tech='linkedin' id='in/arian-mirahmadi-596487208' />
        <TechLink className='invert' tech='twitter' id='arianmirahmadi' />
      </div>
    </div>
  )
}

export default TopBar
