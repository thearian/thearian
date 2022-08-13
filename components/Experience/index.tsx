import type { NextPage } from 'next'
import Image from 'next/image'
import {useState} from 'react'
import styles from '../../styles/Experience.module.css'
import {diffMonths, displayDate} from '../../utils/data'
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

  const switchForm = (config: IDisplayForm) => {
    switch (form) {
      case "fit": return config.fit
      case "full": return config.full
    }
  }

  return (
    <div className={
        styles.container + " " +
        switchForm({fit: styles.container_fit, full: styles.container_full})
    } onClick={expand}>
      <div className={styles.card}>
        <div className='flex flex-col gap-y-3 md:flex-row justify-between'>
          <div className='flex flex-row'>
            <div className='mr-2'>
              <Image
                alt={data.logo}
                src={`/../public/${data.logo}`}
                className='grayscale relative rounded-xl z-0'
                width={switchForm({fit: "40", full: "75"})}
                height={switchForm({fit: "40", full: "75"})}
              />
            </div>
            <div>
              <h2 className='inline font-bold text-gray-900'>
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

          { form == "full" &&
            <div className='flex flex-row gap-x-3 md:flex-col text-xs text-gray-400 self-start text-right'>
              <span className='uppercase'>
                { displayDate(data.dates[0]) }
                ~
                { displayDate(data.dates[1]) }
              </span>
              <span>
                ({ diffMonths(data.dates[0], data.dates[1]) } months)
              </span>
            </div>
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
