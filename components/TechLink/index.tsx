import type { NextPage } from 'next'
import TechIcon from '../TechIcon'

interface Props {
  tech: string
  id: string
  size?: number
}

const TechLink: NextPage<Props> = ({ tech, id, size }) => {
  return (
      <a href={`https://${tech}.com/${id}`}>
        <TechIcon icon={tech} size={size} />
      </a>
  )
}

export default TechLink
