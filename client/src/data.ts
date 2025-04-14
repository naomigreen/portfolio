import { Home, NotFound, Demos, TechTest, Contact } from './containers/pages';

export const NavLinkData = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/demos',
    text: 'Demos'
  },
  {
    link: '/technical-tests',
    text: 'Technical Tests'
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
    name: 'Demos',
    route: 'demos',
    Element: Demos
  },
  {
    name: 'Tech Tests',
    route: 'technical-tests',
    Element: TechTest
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

export const DemoContent = {
  intro: `I'm a huge fan of data visualisation and enjoy making different types of charts`,
  gamingInfo: `Here's a bubble chart of all my favourite video games over the last 30 years`,
  lineInfo: `Line chart with stock data from the last 10 years`,
  raceChart: `GDP race bubble chart with data from 1952-2007`
}
export const intro = `
  I’m Naomi Prescod-Green, a JavaScript Contractor and founder of Codes Green Ltd. <br/> 
  I have a Computer Science background and specialise in React, TypeScript, Vanilla and Node JavaScript. <br /> 
  When I'm not coding, I enjoy gaming and cycling. `;

const virgin = `
  <u>Technology (main project)</u>
  * React
  * TypeScript
  * Next.js
  * React testing library
  * Apollo client
  * Storybook
  * Jenkins
  * AWS
  * Cypress


  <u>Technology (legacy solo project)</u> 
  * Vanilla.js
  * HTML
  * CSS
  * Java
  * XML
  * AEM


  <u>Role (main project)</u>
  * Creating new components
  * Pair programming
  * Code reviews
  * Unit tests
  * End to end tests
  * Deployments to test, staging and production environments
  * Feature demonstrations


  <u>Role (legacy solo project)</u>
  * Creating new components
  * Restyling existing components
  * Updating api
  * Testing
  * Deployments to test and staging environments
  * Feature demonstrations .
`;

const bbc = `
  <u>Technology</u> 
  * React
  * React Hooks
  * Vanilla JavaScript  
  * REST API
  * Style components
  * JSX
  * JSON
  * Jest
  * Storybook
  * AWS Code Build


  <u>Role</u>
  * Creating new components
  * Pair programming
  * Code reviews
  * Unit tests
  * Upgrading dependencies
  * Code refactoring   
  * Custom Slack bot
`

const dazn = `
  <u>Technology</u> 
  * React
  * React Hooks
  * REST API
  * JSON
  * Vanilla JavaScript


  <u>Role</u>
  * Debugging React bugs on Samsung TV, Xbox and Vodafone TV
  * Implementing code fixes
  * Code reviews
  * Pair programming
  * Error handling
`

const intrepid = `
  <u>Technology</u> 
  * React
  * React Hooks
  * TypeScript 
  * REST API
  * C#
  * Sass
  * JSX
  * JSON
  * Jest
  * React hook form
  * React testing library


  <u>Role</u>
  * Creating and styling React components
  * Code reviews
  * Unit and functional tests
  * Pair programming
  * Error handling
  * Creating and updating endpoints (C#)
  * Working with external APIs (creating custom maps and address lookup)
`

const hackney = `
<u>Technology</u> 
* React
* React Hooks
* Next.js
* REST API
* Sass
* JSX
* JSON
* Jest
* React hook form
* React testing library
* Storybook
* Cypress


<u>Role</u>
* Creating and styling React components
* Code reviews
* Unit and functional tests
* Pair programming
* Error handling
* Junior developer training
`

const mars = `
  <u>Technology</u> 
  * React
  * React Hooks
  * Redux
  * REST API
  * React testing library
  * Sass
  * JSX
  * JSON


  <u>Role</u>
  * Designing and creating components
  * Code reviews
  * Unit and functional tests
  * Error handling
  * Data visualisation charts with D3
`

const sky = `
  <u>Technology</u> 
  * React
  * React Hooks
  * Redux
  * REST API
  * Jest
  * Enzyme
  * Sass
  * Emotions
  * JSX
  * JSON


  <u>Role</u>
  * Code reviews
  * Unit and functional tests
  * Regression testing
  * Pairing with junior developers
  * Testing across Xfinity devices, Samsung and LG TVs
  * Error handling
  * Component redesign
`;

const rolls = `
  <u>Technology</u> 
  * React
  * Redux
  * REST API
  * Jest
  * Enzyme
  * Sass
  * JSX
  * JSON
  * CSS3


  <u>Role</u>
  * Application prototype with test data
  * Unit and functional tests
  * OAuth 2.0 login authentication with Azure
  * Custom routing for different users
  * Mobile menu
  * D3 charts
  * Table components 
  * Feature demonstrations
`;

const clearmatics = `
  <u>Technology</u> 
  * React
  * Redux
  * REST API
  * Jest
  * HTML5
  * Enzyme
  * Sass
  * Drizzle
  * JSX
  * JSON
  * CSS3


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
.`;

const monetate = `
  <u>Technology</u> 
  * React
  * Redux
  * Angular
  * Vanilla Javascript ES5/ES6
  * REST API
  * Jest
  * Enzyme
  * JQuery
  * HTML5
  * JSON
  * CSS3
  * Ajax


  <u>Role</u>
  * Application prototype with test data
  * Unit and functional tests
  * OAuth 2.0 login authentication with Azure
  * Custom routing for different users
  * Mobile menu
  * D3 charts
  * Table components 
  * Feature demonstrations
`;

const times = `
  <u>Technology</u> 
  * Vanilla Javascript ES5
  * REST API
  * Jest
  * Enzyme
  * HTML5
  * JSON
  * CSS3
  * Jasmine


  <u>Role</u>
  * Creating new components
  * Unit and functional tests
  * Testing across all browsers
  * Regression testing
  * Pair programming
  * System documentation
  * Feature demonstrations
`;

const businessInfo = `
  <u>Task</u>
  The data is a list of application records and is fetchable at /data. 
  Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3) Important: Use the data file provided

  The app should -
  * Requests the dataset.
  * Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
  * Have a range slider to be able to further filter the dataset based on the total spending value
  * Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter`;

const holidayInfo = `
<u>Task</u>


  Build the 'search results page' which connects to our holiday search API to display a list of holidays for a given location and departure date. Select what data items (example listed below) you think should be included on the page.
  Add the ability to filter the results further by:

  * Price per person
  * Hotel facilities
  * Star rating
`;
export const demo = `Unfortunately most of the projects I work on have non-disclosure agreements, 
therefore I've decided to demonstrate my passion for data visualisation using D3.`;

export const bubbleInfo = 'Bubble chart';

export const socialData = [
  { image: '/logos/linkedin.png', link: 'https://www.linkedin.com/in/naomi-presod-green-3299868a/' },
  { image: '/logos/github.png', link: 'https://github.com/naomigreen' },
  { image: '/logos/code.png', link: 'https://github.com/naomigreen/portfolio' },
];

export const workData = [
  {
    text: virgin,
    logo: '/logos/virginDark.png',
    lightLogo: '/logos/virgin.png',
    link: 'https://corporate.virginatlantic.com/gb/en/our-story.html',
    divider: true
  },
  { text: bbc, logo: '/logos/bbc.png', lightLogo: '/logos/bbc.png', link: 'https://www.bbc.co.uk/aboutthebbc', divider: true },
  { text: dazn, logo: '/logos/dazn.jpeg', lightLogo: '/logos/dazn.jpeg', link: 'https://dazngroup.com/about-us/', divider: true },
  { text: intrepid, logo: '/logos/intrepid.png', lightLogo: '/logos/intrepid.png', link: 'https://www.beintrepid.co.uk/', divider: true },
  {
    text: hackney,
    lightLogo: '/logos/hackneyLight.png',
    logo: '/logos/hackneyDark.png',
    link: 'https://hackney.gov.uk/',
    divider: true
  },
  { text: mars, logo: '/logos/mars.png', lightLogo: '/logos/mars.png', link: 'https://www.mars.com/about', divider: true },
  { text: sky, logo: '/logos/sky.png', lightLogo: '/logos/sky.png', link: 'https://www.skygroup.sky/our-company', divider: true },
  { text: rolls, logo: 'logos/rolls.png', lightLogo: 'logos/rolls.png', link: 'https://www.rolls-royce.com/about.aspx', divider: true },
  {
    text: clearmatics,
    lightLogo: '/logos/clearmaticsLight.png',
    logo: '/logos/clearmaticsDark.png',
    link: 'https://www.clearmatics.com/about/',
    divider: true
  },
  { text: monetate, logo: 'logos/monetate.png', lightLogo: 'logos/monetate.png', link: 'https://monetate.com/about/', divider: true },
  {
    text: times,
    lightLogo: '/logos/timesLight.png',
    logo: '/logos/timesDark.png',
    link: 'https://www.news.co.uk/what-we-do/',
    divider: false,
  },
];

export const techTestData = [
  {
    image: 'holiday-test.png',
    text: holidayInfo,
    title: 'Holiday Test',
    link: 'https://github.com/naomigreen/v-tech-test',
    video: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/holiday.mp4',
    divider: true
  },
  {
    image: '/business-test.png',
    text: businessInfo,
    title: 'Business Test',
    link: 'https://github.com/naomigreen/business-test',
    video: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/business.mp4',
    divider: false
  },
];

export const alertMessages = {
  success: 'Your message has been sent',
  error: 'Error sending message, please try again'
}

export const chartData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];

export const chartStyles = {
  labels: ['Red', 'Orange', 'Blue'],
  datasets: [
    {
      label: 'Popularity of colours',
      data: [55, 23, 96],
      backgroundColor: [
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)'
      ],
      borderWidth: 1,
    }
  ]
}