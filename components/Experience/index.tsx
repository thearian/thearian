import type { NextPage } from 'next'
import Image from 'next/image'
import {useState} from 'react'
import {diffMonths, displayDate} from '../../utils/date'
import TechIcon from '../TechIcon'
import {Props, IDisplayForm} from './@types'
import {LinkIcon, EyeOffIcon, OfficeBuildingIcon} from '@heroicons/react/outline'
import styles from '../../styles/Experience.module.css'
import delays from '../../styles/utils/Delays.module.css'

const Experience: NextPage<Props> = ({ data, onFocus, delay }) => {
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

  const handleFocusEnter = () => { onFocus(data) }
  const handleFocusLeave = () => { onFocus(null) }

  return (
    <div 
      className={
        styles.container + ' ' + delays[`delay-${delay}`] + ' ' +
        switchForm({fit: styles.container_fit, full: styles.container_full})
      }
      onClick={expand}
      onMouseEnter={handleFocusEnter}
      onMouseLeave={handleFocusLeave}
    >
      <div className={styles.card}>
        <div className='flex flex-col gap-y-3 md:flex-row justify-between'>
          <div className='flex flex-row'>
            <div className='mr-2'>
              {
                "logo" in data ? <Image
                  alt={data.logo}
                  src={`/../public/${data.logo}`}
                  className='grayscale relative rounded-xl z-0'
                  width={switchForm({fit: 40, full: 75})}
                  height={switchForm({fit: 40, full: 75})}
                /> : <TechIcon
                  icon={data.techs[0]}
                  className="opacity-60 invert"
                  size={switchForm({fit: 40, full: 75}) as number}
                />
              }
            </div>
            <div>
              <h2 className='inline font-bold text-zinc-300'>
                { data.title }
              </h2>
              <div className='flex flex-row items-center text-gray-500 text-sm font-semibold'>
                { form == "full" &&
                  <OfficeBuildingIcon className='w-5 h-5 mr-2' />
                }
                @{' '}
                { "company" in data && data.company }
                { "projectName" in data && data.projectName }
                { form == "full" && "location" in data &&
                  <span className='ml-1'> | { data.location } </span>
                }
              </div>
              { form == "full" && "workingType" in data &&
                <div className='text-zinc-500 text-sm italic'>
                  { typeof data.workingType == 'string' ?
                      data.workingType :
                      data.workingType.join(' | ')
                  }
                </div>
              }
            </div>
          </div>

          { form == "full" && "dates" in data &&
            <div className='flex flex-row gap-x-3 md:flex-col text-xs text-zinc-500 self-start text-right'>
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

        { form == "full" &&
          <div className='w-full flex flex-row mt-3 flex-wrap gap-2'>
            {
              data.techs.map(tech => 
              <div className='opacity-40 invert' key={tech}>
                <TechIcon icon={tech} size={30} />
              </div>
              )
            }
          </div>
        }

        <div className='text-zinc-100 text-lg'>
          { data.challenges.map(challenge => 
            <p key={challenge} className='mt-2'>
              <b className='text-green-600'>+</b> { challenge }
            </p>
           ) }
        </div>

        { form == "full" &&
          <div className='w-full flex flex-row justify-end gap-x-3 mt-3'>
            <a 
              className={
                data.source ?
                  styles.secondary_button_active : 
                  styles.secondary_button_hidden
              }
              href={data.source}
            >
              { data.source ?
                <TechIcon icon='github' size={25} className='opacity-90' /> :
                <EyeOffIcon className='w-7 h-7 md:w-5 md:h-5' />
              }
              <span className='ml-2'>
                { data.source ? 'View Source code' : 'Source code is protected' }
              </span>
            </a>

              { "url" in data && <a 
                  className={styles.primary_button}
                  href={data.url}
                >
                <LinkIcon className='w-7 h-7 md:w-5 md:h-5' />
                <span className='ml-2'>
                  View Website
                </span>
              </a>
              }
          </div>
        }
      </div>
    </div>
  )
}

export default Experience
