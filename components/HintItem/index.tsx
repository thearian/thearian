import type { NextPage } from 'next'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
  activated?: boolean
}

const HintItem: NextPage<Props> = ({ children, activated }) => {
  return (
    <div className={
        `flex capitalize items-center px-2 py-0.5 transition transition-color hover:bg-zinc-900 hover:text-zinc-500 font-semibold rounded ${activated ? 'text-green-500' : 'text-zinc-600'}`
    }>
      { children }
    </div>
  )
}

export default HintItem
