import type { NextPage } from 'next'
import Image from 'next/image'

interface Props {
  icon: string,
  size?: number,
  className?: string
}

const TechIcon: NextPage<Props> = ({ icon, size, className }) => {
  size = size || 20
  return <Image 
    alt={icon}
    width={size}
    height={size}
    className={`inline-flex ${className}`}
    src={`https://unpkg.com/simple-icons@v7/icons/${icon}.svg`}
  />
}

export default TechIcon
