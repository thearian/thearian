import type { NextPage } from 'next'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
  activated?: boolean
}

const HintItem: NextPage<Props> = ({ children, activated }) => {
  return (
    <div className={
        `px-2 py-0.5 hover:bg-sky-50 hover:text-sky-900 rounded ${activated ? 'text-sky-600 font-bold' : ''}`
    }>
      { children }
    </div>
  )
}

export default HintItem
