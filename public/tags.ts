export type ITag = keyof Titles | keyof SocialSkills

interface Titles {
  "Senior Full Stack": string
  "Web Developer": string
  "Product Manager": string
  "Open Source Maintainer": string
}

interface SocialSkills {
  "Teaching": string
  "Marketing": string
  "Branding": string
}
