import type { NextPage } from 'next'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
  activated?: boolean
}

const HintItem: NextPage<Props> = ({ children, activated }) => {
  return (
    <div className={
        `flex capitalize items-center px-2 py-0.5 transition transition-color hover:bg-gray-100 hover:text-gray-500 font-semibold rounded ${activated ? 'text-sky-500' : 'text-gray-600'}`
    }>
      { children }
    </div>
  )
}

export default HintItem
