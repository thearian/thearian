import {IExperience} from "../@types";
import {dateByYear} from "../utils/date";

export const experiences: IExperience[] = [
  {
    id: 1,
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
      'Fixed bugs of a forex brokerage',
      'Remaid the frontend dashboard for better user experience',
      'Re-engineered the backend structure for the best development'
    ],
    url: "https://nyxmarket.com",
    tags: [
      "Senior Full Stack",
      "Web Developer"
    ]
  },
  {
    id: 2,
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
      'Re-engineered database for better performance (15 X)',
      'Implemented an in-app Social Network with integrated Messenger',
    ],
    url: "https://infosaba.com",
    tags: [
      "Web Developer",
    ]
  },

  {
    id: 3,
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
      'Implemented a presentive website with ecommerce, blog and a custom admin panel',
      'Optimized for search engines'
    ],
    url: "https://infosaba.com",
    tags: [
      "Web Developer",
      "Product Manager"
    ]
  },
]
