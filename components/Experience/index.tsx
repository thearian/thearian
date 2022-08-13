
import type { NextPage } from 'next'
import {IExperience} from '../@types'

interface Props {
  data: IExperience
}

const Experience: NextPage<Props> = ({ data }) => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
      <div className='bg-gray-100 p-5 m-4 my-2 md:my-4 md:mx-2 rounded-xl'>
        <h2 className='font-bold text-gray-900'>
          { data.title }
        </h2>
        <div className='text-gray-500 text-sm font-semibold'>
          { data.company }
        </div>
        <div className='text-gray-500 text-sm italic'>
          { typeof data.workingType == 'string' ?
            data.workingType :
            data.workingType.join(' | ')
          }
        </div>
        <div className='text-gray-700 text-lg'>
          { data.challenges.map(challenge => 
            <p key={challenge} className='mt-2 ml-2'>
              <b className='text-blue-600'>+</b> { challenge }
            </p>
           ) }
        </div>
      </div>
    </div>
  )
}

export default Experience
