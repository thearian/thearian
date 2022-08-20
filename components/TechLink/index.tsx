import type { NextPage } from 'next'
import TechIcon from '../TechIcon'

interface Props {
  tech: string
  id: string
  size?: number
  className?: string
}

const TechLink: NextPage<Props> = ({ tech, id, size, className }) => {
  return (
      <a href={`https://${tech}.com/${id}`} className='flex justify-center'>
        <TechIcon icon={tech} size={size} className={className} />
      </a>
  )
}

export default TechLink
