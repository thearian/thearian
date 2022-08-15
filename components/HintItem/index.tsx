import type { NextPage } from 'next'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
  activated?: boolean
}

const HintItem: NextPage<Props> = ({ children, activated }) => {
  return (
    <div className={
        `flex capitalize items-center px-2 py-0.5 transition-color hover:bg-gray-100 hover:text-gray-700 font-semibold rounded ${activated ? 'text-sky-500 font-bold' : ''}`
    }>
      { children }
    </div>
  )
}

export default HintItem
