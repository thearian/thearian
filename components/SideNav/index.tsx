import type { NextPage } from 'next'
import HintItem from '../HintItem'
import styles from '../../styles/SideNav.module.css'
import {ITag, SocialSkills, Titles} from '../../public/tags'
import {IExperience} from '../@types'
import {experiences, getExperiencedTechs} from '../../public/resume'

interface Props {
  focus?: IExperience | null
}

const SideNav: NextPage<Props> = ({ focus }) => {
  const techs = getExperiencedTechs(experiences)
  const focusTitles = focus?.tags
  
  const matchAny = (item: ITag, list?: ITag[]): boolean => {
    if (!list) return false
    const matchedItems = list.filter(listItem => listItem == item)
    if (matchedItems.length == 0 ) return false
    else return true
  }

  return (
    <div className={styles.container}>
      <div>
        { Object.keys(Titles).map(myTitle => 
          <HintItem activated={matchAny(myTitle as ITag, focusTitles)} key={myTitle}> { myTitle } </HintItem>
        ) }
      </div>

      <div className={styles.skills}>
        <div>
          <div className={styles.badge}>
            <span> Skills </span>
          </div>
          { Object.keys(SocialSkills).map(skill => 
            <HintItem key={skill}> { skill } </HintItem>
          ) }
        </div>

        <div>
          <div className={styles.badge}>
            <span> Techs </span>
          </div>
          { techs.map(tech => 
            <HintItem key={tech}> { tech } </HintItem>
          ) }
        </div>
      </div>
    </div>
  )
}

export default SideNav
