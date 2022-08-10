import type { NextPage } from 'next'
import Image from 'next/image'

interface Props {
  icon: string,
  size?: number,
}

const TechIcon: NextPage<Props> = ({ icon, size }) => {
  size = size || 20
  return <Image 
    alt={icon}
    width={size}
    height={size}
    src={`https://unpkg.com/simple-icons@v7/icons/${icon}.svg`}
  />
}

export default TechIcon
