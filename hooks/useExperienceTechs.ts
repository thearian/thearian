import {IExperience} from "../@types"

export function useExperiencedTechs (experiences: IExperience[]): string[] {
  interface SotringHashList {
    [key: string]: number
  }

  const hashList: SotringHashList = {}

  experiences.forEach(job => job.techs.forEach(tech => {
    if (tech in hashList) hashList[tech] ++
    else hashList[tech] = 1
  }))

  return Object.entries(hashList)
    .sort((a, b) => b[1] - a[1])
    .map(hashItem => hashItem[0])
}
