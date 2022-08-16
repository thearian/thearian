import {IExperience} from '../../@types'

export interface Props {
  data: IExperience
  onFocus: (newFocus: IExperience | null) => void
  delay?: number
}

export interface IDisplayForm {
  fit: string | number
  full: string | number
}


