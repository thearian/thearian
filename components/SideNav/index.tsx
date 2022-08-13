import type { NextPage } from 'next'
import HintItem from '../HintItem'

const SideNav: NextPage = () => {
  return (
    <div className='flex flex-col gap-y-7 p-5 w-full md:w-1/4 md:ml-2 lg:w-1/6 lg:ml-5'>
      <div className='text-gray-800'>
        <HintItem>
          Senior FullStack
        </HintItem>

        <HintItem>
          Web Developer
        </HintItem>

        <HintItem>
          Product Manager
        </HintItem>

        <HintItem>
          Open Source Maintainer
        </HintItem>
      </div>
    </div>
  )
}

export default SideNav
