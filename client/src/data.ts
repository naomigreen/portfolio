import { Home, NotFound, Demos, Contact, Projects } from './containers/pages';

export const NavLinkData = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/projects',
    text: 'Projects'
  },
  {
    link: '/demos',
    text: 'Demos'
  },
  {
    link: '/contact',
    text: 'Contact'
  },
]

export const routePaths = [
  {
    name: 'Home',
    route: '/',
    Element: Home
  },
  {
    name: 'Projects',
    route: 'projects',
    Element: Projects
  },
  {
    name: 'Demos',
    route: 'demos',
    Element: Demos
  },
  {
    name: 'Contact',
    route: 'contact',
    Element: Contact
  },
  {
    name: 'not-found',
    route: '*',
    Element: NotFound
  },
];


export const cardIcons = {
  top: [
    {
      alt: 'React logo',
      src: '/icons/react.png',
    },
    {
      alt: 'Next.js logo',
      src: '/icons/next.svg',
    },
    {
      alt: 'TypeScript',
      src: '/icons/ts.png',
    },
    {
      alt: 'Javascript logo',
      src: '/icons/js.svg',
    },
  ],
  bottom: [
    {
      alt: 'Node logo',
      src: '/icons/node.png',
    },
    {
      alt: 'java logo',
      src: '/icons/java.png',
    },
    {
      alt: 'c++ logo',
      src: '/icons/c++.png',
    },
  ]
}

export const themeValues = [
  {
    theme: 'dark',
    themeImage: '/icons/moon.png',
  },
  {
    theme: 'light',
    themeImage: '/icons/sun.png',
  },
  {
    theme: 'cool',
    themeImage: '/icons/cool.png',
  }
]

export const Titles = {
  projects: 'Project History',
  aboutMe: 'About Me',
  contact: 'Contact Me'
}
export const DemoContent = {
  intro: `In this section I'll demo some of the components I've created over the years`,
  cardText: `With ten years experience, seven spent contracting, this developer has the ability to hit the ground running and adapts well to new environments. 
  <br/>
  Naomi values good teamwork with the ability to communicate and collaborate well with others.`,
  gamingInfo: `Here's a bubble chart of all my favourite video games over the last 30 years`,
  lineInfo: `Line chart with stock data from the last 10 years`,
  raceChart: `GDP race bubble chart with data from 1952-2007`
}

export const intro = `
  Hello 👋, I'm Naomi Prescod-Green. A Senior Software Developer from London. 

  I'm currently celebrating ten years of software development and thought it would fun to update my portfolio for the occasion.
`;

const virgin = `
  <u>Role (main project)</u>
  * Creating new components
  * Pair programming
  * Code reviews
  * Unit tests
  * End to end tests
  * Deployments to test, staging and production environments
  * Feature demonstrations.


  <u>Technologies (main project)</u>
  React, TypeScript, Next.js, React testing library, Apollo client, Storybook, Jenkins, Cypress.

  <br/>
  <u>Role (legacy solo project)</u>
  * Creating new components
  * Restyling existing components
  * Updating api
  * Testing
  * Deployments to test and staging environments
  * Feature demonstrations.


  <u>Technologies (legacy solo project)</u> 
  Vanilla.js, HTML, CSS, Java, XML, AEM
`;

const bbc = `
  <u>Role</u>
  * Creating new components
  * Pair programming
  * Code reviews
  * Unit tests
  * Upgrading dependencies
  * Code refactoring   
  * Custom Slack bot


  <u>Technologies</u> 
  
  React, React Hooks, Vanilla.js, REST API, Style components, JSX, JSON, Jest, Storybook, AWS Code Build
`

const intrepid = `
  <u>Role</u>
  * Creating and styling React components
  * Code reviews
  * Unit and functional tests
  * Pair programming
  * Error handling
  * Creating and updating endpoints (C#)
  * Working with external APIs (creating custom maps and address lookup)


  <u>Technologies</u> 
  React, React Hooks, TypeScript, REST API, C#, Sass, JSX, JSON, Jest, React hook form, React testing library
`;

const hackney = `
<u>Role</u>
* Creating and styling React components
* Code reviews
* Unit and functional tests
* Pair programming
* Error handling
* Junior developer training


<u>Technologies</u> 
React, React Hooks, Next.js, REST API, Sass, JSX, JSO, Jest, React hook form, React testing library, Storybook, Cypress
`;

const sky = `
  <u>Role</u>
  * Code reviews
  * Unit and functional tests
  * Regression testing
  * Pairing with junior developers
  * Testing across Xfinity devices, Samsung and LG TVs
  * Error handling
  * Component redesign


  <u>Technologies</u>
  React, React Hooks, Redux, REST API, Jest, Enzyme, Sass, Emotions, JSX, JSON
`;

const rolls = `
  <u>Role</u>
  * Application prototype with test data
  * Unit and functional tests
  * OAuth 2.0 login authentication with Azure
  * Custom routing for different users
  * Mobile menu
  * D3 charts
  * Table components 
  * Feature demonstrations


  <u>Technologies</u>
  React, Redux, REST API, Jest, Enzyme, Sass, JSX, JSON, CSS3
`;

const clearmatics = `
  <u>Role (solo project)</u>
  * Nested routing by accounts and currency
  * Creating test data to populate components
  * Live REST API implementation and testing
  * Error handling
  * Unit tests and documentation
  * Browser testing
  * Table components
  * UI design
  * TestNet configuration
  * Dapps interface components
  * MetaMask testing
  * Solidity Ethereum smart contract
  * Feature demonstrations


  <u>Technologies</u>
  React, Redux, REST API, Jest, HTML5, Enzyme, Sass, Drizzle, JSX, JSON, CSS3
`;

const monetate = `
  <u>Role</u>
  * Application prototype with test data
  * Unit and functional tests
  * OAuth 2.0 login authentication with Azure
  * Custom routing for different users
  * Mobile menu
  * D3 charts
  * Table components 
  * Feature demonstrations


  <u>Technologies</u>
  React, Redux, Angular, Vanilla.js, REST API, Jest, Enzyme, JQuery, HTML5, JSON, CSS3, Ajax
`;


const times = `
  <u>Role</u>
  * Creating new components
  * Unit and functional tests
  * Testing across all browsers
  * Regression testing
  * Pair programming
  * System documentation
  * Feature demonstrations


  <u>Technologies</u> Vanilla.js, REST API, Jest, Enzyme, HTML5, JSON, CSS3, Jasmine
`;


export const socialData = [
  { image: '/logos/linkedin.png', link: 'https://www.linkedin.com/in/naomi-presod-green-3299868a/' },
  { image: '/logos/github.png', link: 'https://github.com/naomigreen' },
  { image: '/logos/code.png', link: 'https://github.com/naomigreen/portfolio' },
];

export const desksImages = [
  {
    image: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/times-desk.jpg',
    alt: 'Time office desk',
    year: 2015
  },
  {
    image: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/monetate-desk.jpg',
    alt: 'Monetate office desk',
    year: 2017
  },
  {
    image: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/clear-desk.jpg',
    alt: 'Cleamatics office desk',
    year: 2019
  },
  {
    image: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/office.jpg',
    alt: 'Home office desk',
    year: 2025
  },
];

export const workData = [
  {
    text: virgin,
    logo: '/logos/virginDark.png',
    lightLogo: '/logos/virgin.png',
    alt: 'Virgin Atlantic logo',
    link: 'https://corporate.virginatlantic.com/gb/en/our-story.html',
    divider: true
  },
  {
    text: bbc,
    logo: '/logos/bbc.jpg',
    lightLogo: '/logos/bbc.jpg',
    alt: 'BBC logo',
    link: 'https://www.bbc.co.uk/aboutthebbc',
    divider: true
  },
  {
    text: intrepid,
    logo: '/logos/intrepid.png',
    lightLogo: '/logos/intrepid.png',
    alt: 'Intrepid logo',
    link: 'https://www.beintrepid.co.uk/',
    divider: true
  },
  {
    text: hackney,
    lightLogo: '/logos/hackneyLight.png',
    logo: '/logos/hackneyDark.png',
    alt: 'Hackney logo',
    link: 'https://hackney.gov.uk/',
    divider: true
  },
  {
    text: sky,
    logo: '/logos/sky.png',
    lightLogo: '/logos/sky.png',
    alt: 'Sky logo',
    link: 'https://www.skygroup.sky/our-company',
    divider: true
  },
  {
    text: rolls,
    logo: 'logos/rolls.png',
    lightLogo: 'logos/rolls.png',
    alt: 'Rolls Royce logo',
    link: 'https://www.rolls-royce.com/about.aspx',
    divider: true
  },
  {
    text: clearmatics,
    lightLogo: '/logos/clearmaticsLight.png',
    logo: '/logos/clearmaticsDark.png',
    alt: 'Clearmatics logo',
    link: 'https://www.clearmatics.com/about/',
    divider: true
  },
  {
    text: monetate,
    logo: 'logos/monetate.png',
    lightLogo: 'logos/monetate.png',
    alt: 'Monetate logo',
    link: 'https://monetate.com/about/',
    divider: true
  },
  {
    text: times,
    lightLogo: '/logos/timesLight.png',
    logo: '/logos/timesDark.png',
    alt: 'The Times logo',
    link: 'https://www.news.co.uk/what-we-do/',
    divider: false,
  },
];

export const alertMessages = {
  success: 'Your message has been sent',
  error: 'Error sending message, please try again'
}
