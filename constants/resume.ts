import {IExperience} from "../@types";
import {dateByYear} from "../utils/date";

export const experiences: IExperience[] = [
  {
    company: "Armico Marketing",
    title: "Executive Manager",
    location: "Tehran",
    workingType: "Full Time",
    logo: "armico.png",
    dates: [
      dateByYear(2022, 5, 1),
      new Date()
    ],
    techs: ['typescript', 'react', 'nextdotjs', 'tailwindcss', 'nodedotjs', 'postgresql', 'vuedotjs', 'nuxtdotjs', 'apollographql', 'graphql'],
    challenges: [
      'Designed the branding',
      'Implemented all marketing services',
      'Teached junior developers and hired them'
    ],
    url: "https://armi-co.com",
    tags: [
      "Teaching",
      "Branding",
      "Marketing",
      "Executive Manager",
      "Senior Full Stack",
      "Web Developer"
    ]
  },

  {
    company: "Nyx Broker",
    title: "Senior Full Stack Developer",
    location: "Istanbul",
    workingType: ["Full Time", "Remote"],
    imgs: ["3.png", "3.1.png"],
    logo: "nyx.png",
    dates: [
      dateByYear(2021, 11, 1),
      dateByYear(2022, 6, 1),
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
    projectName: "volu",
    title: "Maintainer",
    techs: ['rust','shell','gnubash'],
    challenges: [
      "Engineered a scalable CLI tool using Rust",
      "Enhanced the performance (40x)",
      "Documented the development and made the project Open Source "
    ],
    source: "https://github.com/thearian/volu",
    tags: [ "Open Source Maintainer" ]
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
      'Re-engineered database for better performance (15x)',
      'Implemented an in-app Social Network with integrated Messenger',
    ],
    url: "https://infosaba.com",
    tags: [
      "Web Developer",
    ]
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
      'Implemented a presentive website with ecommerce, blog and a custom admin panel',
      'Optimized for search engines'
    ],
    url: "https://infosaba.com",
    tags: [
      "Web Developer",
      "Product Manager"
    ]
  },
{
    company: "Weesh",
    title: "Product Manager",
    location: "Tehran",
    workingType: "Part Time",
    logo: "weesh.png",
    dates: [
      dateByYear(2020, 4, 1),
      dateByYear(2020, 10, 1)
    ],
    techs: ['react', 'graphql', 'apollographql', 'nodedotjs'],
    challenges: [
      'Managed to achieve a weekly production update',
      'Multiplied the user interactions using the Credit feature (an in-app money)',
      'Grew community using in-app weekly challenges'
    ],
    url: "https://weeshme.netlify.app",
    tags: [
      "Product Manager"
    ]
  }
]
