import type { NextPage } from 'next'
import HintItem from '../HintItem'
import styles from '../../styles/SideNav.module.css'

const SideNav: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <HintItem> Senior FullStack </HintItem>
        <HintItem> Web Developer </HintItem>
        <HintItem> Product Manager </HintItem>
        <HintItem> Open Source Maintainer </HintItem>
      </div>

      <div className={styles.skills}>
        <div>
          <div className={styles.badge}>
            <span> Skills </span>
          </div>
          <HintItem> Product Management </HintItem>
          <HintItem> Documenting </HintItem>
          <HintItem> Teaching </HintItem>
          <HintItem> Marketing </HintItem>
          <HintItem> Branding </HintItem>
        </div>

        <div>
          <div className={styles.badge}>
            <span> Techs </span>
          </div>
          <HintItem> Typescript </HintItem>
          <HintItem> React js </HintItem>
          <HintItem> Vue js </HintItem>
          <HintItem> Node js </HintItem>
          <HintItem> Graphql </HintItem>
          <HintItem> Mongo db </HintItem>
          <HintItem> Postgresql </HintItem>
        </div>
      </div>
    </div>
  )
}

export default SideNav
