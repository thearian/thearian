import type { NextPage } from 'next'
import Image from 'next/image'
import {useState} from 'react'
import styles from '../../styles/Experience.module.css'
import {Props, IDisplayForm} from './@types'

const Experience: NextPage<Props> = ({ data }) => {
  const [form, setForm] = useState<keyof IDisplayForm>("fit")

  const expand = () => {
    setForm(prev => {
      if (prev == "fit") return "full"
      else if (prev == "full") return "fit"
      return "fit"
    })
  }

  const matchForm = (config: IDisplayForm) => {
    switch (form) {
      case "fit": return config.fit
      case "full": return config.full
    }
  }

  return (
    <div className={
        styles.container + " " +
        matchForm({fit: styles.container_fit, full: styles.container_full})
    } onClick={expand}>
      <div className={styles.card}>
        <div className='flex flex-row'>
          <div className='mr-2'>
            <Image
              alt={data.logo}
              src={`/../public/${data.logo}`}
              className='relative rounded-xl z-0'
              width={matchForm({fit: "50", full: "100"})}
              height={matchForm({fit: "50", full: "100"})}
            />
          </div>
          <div>
            <h2 className='font-bold text-gray-900'>
              { data.title }
            </h2>
            <div className='text-gray-500 text-sm font-semibold'>
              { data.company }
              { form == "full" &&
                <span className='inline'> | { data.location } </span>
              }
            </div>
            { form == "full" &&
              <div className='text-gray-500 text-sm italic'>
                { typeof data.workingType == 'string' ?
                  data.workingType :
                  data.workingType.join(' | ')
                }
              </div>
            }
          </div>
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
