import type { NextPage } from 'next'
import HintItem from '../HintItem'
import styles from '../../styles/SideNav.module.css'
import {ITag, SocialSkills, Titles} from '../../@types/tag'
import {IExperience} from '../../@types'
import {experiences} from '../../constants/resume'
import TechIcon from '../TechIcon'
import {useExperiencedTechs} from '../../hooks/useExperienceTechs'

interface Props {
  focus?: IExperience | null
}

const SideNav: NextPage<Props> = ({ focus }) => {
  const techs = useExperiencedTechs(experiences)
  
  const matchAny = <T,>(item: T, list?: T[]): boolean => {
    if (!list) return false
    const matchedItems = list.filter(listItem => listItem == item)
    if (matchedItems.length == 0 ) return false
    else return true
  }

  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <div className='flex flex-col gap-y-7'>
          <div>
            { Object.keys(Titles).map(myTitle => 
              <HintItem 
                activated={matchAny(myTitle as ITag, focus?.tags)} 
                key={myTitle}
              >
                { myTitle }
              </HintItem>
            ) }
          </div>

          <div>
            <div className={styles.badge}>
              <span> Skills </span>
            </div>
            { Object.keys(SocialSkills).map(skill => 
                <HintItem
                  activated={matchAny(skill as ITag, focus?.tags)}
                  key={skill}
                >
                  { skill }
                </HintItem>
            ) }
          </div>
        </div>

        <div>
          <div className={styles.badge}>
            <span> Techs </span>
          </div>
          { techs.map(tech => 
            <HintItem
              activated={matchAny(tech, focus?.techs)}
              key={tech}
            >
              <TechIcon icon={tech} className={
                  `${matchAny(tech, focus?.techs) ? "filter-bg-green-500" : 'opacity-50 invert'} transition transition-color `
              } size={18} />
              <span className='ml-2'>
                { tech.replaceAll("dot", " ") }
            </span>
            </HintItem>
          ) }
        </div>
      </div>
    </div>
  )
}

export default SideNav
