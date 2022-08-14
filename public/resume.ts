import {IExperience} from "../components/@types";
import {dateByYear} from "../utils/data";


export const experiences: IExperience[] = [
  {
    company: "Nyx Broker",
    title: "Senior Full Stack Developer",
    location: "Istanbul",
    workingType: ["Full Time", "Remote"],
    imgs: ["3.png", "3.1.png"],
    logo: "nyx.png",
    dates: [
      dateByYear(2021, 11, 1),
      new Date()
    ],
    techs: ['typescript', 'react', 'nextdotjs', 'tailwindcss', 'nodedotjs', 'postgresql', 'mysql'],
    challenges: [
      'Remade and developed a forex brokerage dashboard frontend',
      'Re-engineered the backend structure for the best development'
    ],
    url: "https://nyxmarket.com"
  },
  {
    company: "Infosaba",
    title: "Full Stack Developer",
    location: "Tehran",
    workingType: ["Full Time","Remote", "Hybrid"],
    imgs: ["1.png", "1.1.jpg", "1.2.jpg"],
    logo: "infosaba.png",
    dates: [
      dateByYear(2021, 4, 1),
      dateByYear(2021, 11, 1)
    ],
    techs: ['typescript', 'react', 'nodedotjs', 'graphql', 'apollographql', 'mongodb'],
    challenges: [
      'Designed and implemented both backend and frontend of an in app social network with messenger',
      'Enhanced the main database performance to over 15x better response time'
    ],
    url: "https://infosaba.com"
  },

  {
    company: "Siwan Tech",
    title: "Full Stack Developer",
    location: "Isfahan",
    workingType: "Part Time",
    imgs: ["2.png"],
    logo: "siwan.png",
    dates: [
      dateByYear(2021, 3, 1),
      dateByYear(2021, 6, 1)
    ],
    techs: ['vuedotjs', 'gridsome', 'tailwindcss', 'nodedotjs', 'graphql', 'apollographql', 'mongodb'],
    challenges: [
      'Implemented a presentive website with ecommerce, blog and a custom admin panel'
    ],
    url: "https://infosaba.com"
  },
]