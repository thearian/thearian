export interface IExperience {
  company: string
  title: keyof IJobTitle
  location: keyof ICity
  workingType: keyof IWorkingType | (keyof IWorkingType)[]
  imgs: string[]
  dates: Date[]
  techs: string[]
  challenges: string[]
  source?: string
  url: string
}

interface IJobTitle {
  "Senior Full Stack Developer": string
  "Full Stack Developer": string
  "Backend Developer": string
  "Product Manager": string
  "Executive Manage": string
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
