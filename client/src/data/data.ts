import { Contact, Demo, Home, TechTest } from '../containers/pages';
import {
  bbcLogo,
  clearmaticsLogoDark,
  clearmaticsLogoLight,
  daznLogo,
  hackneyLogoDark,
  hackneyLogoLight,
  intrepidLogo,
  marsLogo,
  monetateLogo,
  rollsLogo,
  timesLogoLight,
  timesLogoDark,
  skyLogo,
  githubLogo,
  linkedinLogo,
  codeIcon,
  virginLogoDark,
  virginLogoLight,
  business,
  holiday,
} from '../assets/images';

export const links = [
  { name: 'Home', route: '/', Element: Home },
  // TODO update to latest version of d3
  // { name: 'Demo', route: 'demo', Element: Demo },
  { name: 'Tech Tests', route: 'tech-tests', Element: TechTest },
  { name: 'Contact', route: 'contact', Element: Contact },
];

export const intro = `
  I’m Naomi Prescod-Green, a JavaScript Contractor and founder of Codes Green Ltd. <br/> 
  I have a Computer Science background and specialise in React, TypeScript, Vanilla and Node JavaScript. <br /> 
  When I'm not coding, I enjoy gaming and cycling. `;

const virgin = `
  <u>Technology</u> 
  * React
  * React Hooks
  * Vanilla JavaScript
  * JQuery  
  * JSX
  * JSON
  * Jest
  * Storybook
  * Jenkins
  * AWS
  * AEM (my day rate will include fees for a therapist if you use this)

  <u>Role</u>
  * Creating new components
  * Code reviews
  * Unit tests
  * Code refactoring
  * Site redesign

This project is a full redesign of the flight pre-order system. I'm working with the designers to change the look and functionality of the legacy application. We also aim to create a new React application to replace it.`;

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

This role was maintaining, upgrading and creating new components. The application is a mixture of React and Vanilla JavaScript. This was a great experience maintaining such a large codebase`;

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

  This was more of a support role, helping to fix any bugs that arose within the devices assigned to me (Xbox, Samsung and Vodafone TV). 
  This was a great experience troubleshooting a react application on these devices.`;

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

This was a greenfield project for [Little Journey](http://www.littlejourney.health/), a medical application to assist children during medical procedures. 
The goal was to help children deal with anxiety, encourage and monitor the taking of medication, organise and prepare for appointments and procedures. 
This application consist of two parts, a portal used my staff to create and monitor medical trials and a mobile version also written in React and precompiled with Cordova.`;

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

This application was created as an interim solution for social care after Hackney council was hacked in October 2020.

We started by displaying the retrieved data, creating a form builder to generate all forms used by practitioners, adding the functional to create a new person and enabling the allocations of social workers`;

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

  This role was for internal analytical web application to demonstrate process logs to shareholders. This was a short contract as the previous contractor decided to leave early`;

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

  This project was a full redesign of NowTV for NBCU's Peacock video streaming application. <br/>
  This was my first time working on a video streaming application for TV. It was very different to 
  coding on web but a great experience creating components for different environments such as Xfinity, Samsung 
  and LG TVs.`;

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

  This was a very rewarding project to create a user interface that displayed engine component 
  information throughout the progress of development. The project consist of a great deal of data 
  visualisation using AI data. I used D3 and React Table to create charts, graphs and interactive 
  tables.`;

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

  <u>Role</u>
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

  As the sole Frontend React developer, I was given creative control to architect, design and 
  implement the USC user interface. I also had the pleasure of creating two decentralised applications
  for network permissioning. This was amazing role that enabled me to problem solve rapidly and 
  delivery within short deadlines.`;

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

  This was an exciting role that enabled me to work with a number of different frameworks. I was part 
  of a small team of only three developers working on all UK and European sites, this enabled me to 
  learn how to deliver fast and work well under pressure.`;

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

  I worked on Template Designer, a Vanilla Javascript web application with a similar look and feel to 
  Photoshop. The application is used by The Times and Sunday Times editorial to create article 
  templates. This was a great role as it gave me a fundamental understanding of Vanilla JavaScript 
  without frameworks.`;

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
  { image: linkedinLogo, link: 'https://www.linkedin.com/in/naomi-presod-green-3299868a/' },
  { image: githubLogo, link: 'https://github.com/naomigreen' },
  { image: codeIcon, link: 'https://github.com/naomigreen/portfolio' },
];

export const workData = [
  {
    text: virgin,
    logo: virginLogoDark,
    lightLogo: virginLogoLight,
    link: 'https://corporate.virginatlantic.com/gb/en/our-story.html',
    width: '350px',
    maxWidth: '50%',
  },
  { text: bbc, logo: bbcLogo, link: 'https://www.bbc.co.uk/aboutthebbc', width: '250px', maxWidth: '50%' },
  { text: dazn, logo: daznLogo, link: 'https://dazngroup.com/about-us/', width: '250px', maxWidth: '40%' },
  { text: intrepid, logo: intrepidLogo, link: 'https://www.beintrepid.co.uk/', width: '250px', maxWidth: '50%' },
  {
    text: hackney,
    lightLogo: hackneyLogoLight,
    logo: hackneyLogoDark,
    link: 'https://hackney.gov.uk/',
    width: '250px',
    maxWidth: '50%',
  },
  { text: mars, logo: marsLogo, link: 'https://www.mars.com/about', width: '250px', maxWidth: '50%' },
  { text: sky, logo: skyLogo, link: 'https://www.skygroup.sky/our-company', width: '250px', maxWidth: '40%' },
  { text: rolls, logo: rollsLogo, link: 'https://www.rolls-royce.com/about.aspx', width: '250px', maxWidth: '50%' },
  {
    text: clearmatics,
    lightLogo: clearmaticsLogoLight,
    logo: clearmaticsLogoDark,
    link: 'https://www.clearmatics.com/about/',
    width: '250px',
    maxWidth: '50%',
  },
  { text: monetate, logo: monetateLogo, link: 'https://monetate.com/about/', width: '250px', maxWidth: '50%' },
  {
    text: times,
    lightLogo: timesLogoLight,
    logo: timesLogoDark,
    link: 'https://www.news.co.uk/what-we-do/',
    width: '250px',
    maxWidth: '50%',
    divider: false,
  },
];

export const techTestData = [
  {
    image: holiday,
    info: holidayInfo,
    title: 'Holiday Test',
    link: 'https://github.com/naomigreen/v-tech-test',
    video: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/holiday.mp4',
  },
  {
    image: business,
    info: businessInfo,
    title: 'Business Test',
    link: 'https://github.com/naomigreen/business-test',
    video: 'https://naomi-assets.s3.eu-west-2.amazonaws.com/business.mp4',
  },
];
