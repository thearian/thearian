import {ITag} from "./tag"

export type IExperience = CompanyExperience | OpenSourceProject

interface CompanyExperience {
  company: string
  location: keyof ICity
  title: keyof IJobTitle | (keyof IJobTitle)[]
  workingType: keyof IWorkingType | (keyof IWorkingType)[]
  imgs?: string[]
  logo: string
  dates: Date[]
  techs: string[]
  challenges: string[]
  source?: string
  url: string
  tags: ITag[]
}

interface OpenSourceProject {
  projectName: string
  title: keyof IJobTitle | (keyof IJobTitle)[]
  imgs?: string[]
  techs: string[]
  challenges: string[]
  source?: string
  tags: ITag[]
}

interface IJobTitle {
  "Senior Full Stack Developer": string
  "Full Stack Developer": string
  "Backend Developer": string
  "Product Manager": string
  "Executive Manager": string
  "Maintainer": string
}

interface ICity {
  Istanbul: string
  Isfahan: string
  Tehran: string
}

interface IWorkingType {
  "Part Time": string
  "Full Time": string
  "Remote": string
  "Hybrid": string
}
