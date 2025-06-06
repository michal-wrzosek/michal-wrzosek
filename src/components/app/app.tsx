/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CV } from '../cv';
import type { CvData } from '../cv';
import { Home } from '../home';

import avatar from './avatar.png';

const cvData: CvData = {
  education: [
    {
      dateFinished: '2015',
      dateStarted: '2012',
      faculty: 'Faculty of Electrical Engineering',
      fieldOfStudy: 'Automatics and Robotics',
      university: 'Warsaw University of Technology',
    },
    {
      dateFinished: '2014',
      dateStarted: '2011',
      faculty: 'Faculty of Management',
      fieldOfStudy: 'Business Informatics',
      university: 'Warsaw University of Technology',
    },
  ],
  jobs: [
    {
      buzzwords: [
        'React.js',
        'GraphQL',
        'Node.js',
        'Typescript',
        'styled components',
        'K8s',
        'CircleCI',
        'GitHub Actions',
        'Azure Cloud',
      ],
      company: 'Shell',
      dateFinished: 'present',
      dateStarted: '2020',
      description: ['Contract assignment @ Shell'],
      location: 'Rotterdam, NETHERLANDS',
      position: 'Senior Software Engineer',
    },
    {
      buzzwords: ['React.js', 'Typescript', 'styled components', 'GitLab pipelines', 'WebRTC', 'React Native'],
      company: 'Quin',
      dateFinished: '2023',
      dateStarted: '2022',
      description: ['Contract assignment @ Quin. Developing solutions for medical care in the Netherlands.'],
      location: 'Amsterdam, NETHERLANDS',
      position: 'Senior Frontend Developer',
    },
    {
      buzzwords: [
        'Solidity',
        'ZK Proofs',
        'ZK Rollups',
        'Circom',
        'ZoKrates',
        'Ethereum',
        'Web3',
        'Truffle',
        'Hardhat',
        'Geth',
      ],
      company: 'Klarluft',
      dateFinished: 'present',
      dateStarted: '2018',
      description: [
        '- bitbond.com - Reviewing Solidity contracts and doing Solidity workshops for German banks. Conducting Solidity interviews',
        '- zklar.com - Secure Ethereum blockchain payment technology powered by zero-knowledge proofs and rollups',
        '- tzklar.com - Building blocks for Tezos contracts.',
      ],
      location: 'Rotterdam, NETHERLANDS',
      position: 'Founder',
    },
    {
      buzzwords: [
        'React.js',
        'React Native',
        'Expo',
        'iOS & Android development',
        'GraphQL',
        'Apollo Server',
        'Express.js',
        'Node.js',
        'Typescript',
        'Storybook',
        'Backbone',
        'LESS',
        'Bootstrap',
        'Jenkins',
      ],
      company: 'Valassis Digital',
      dateFinished: '2020',
      dateStarted: '2019',
      description: [
        'Valassis is one of the largest coupon distributors/processors in the world. Established 50 years ago it has approximately 7,000 employees in 28 states and 9 countries. Main goal of my team was to maintain and develop new features within solution taking care of coupons and discounts transactions in Europe. We delivered both B2B and B2B2C products where our customers were often the biggest companies in the world.',
      ],
      location: 'Hamburg, GERMANY',
      position: 'Senior Software Engineer',
    },
    {
      buzzwords: [
        'React.js',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Javascript',
        'Styled-Components',
        'Material UI',
        'Redux',
        'Saga',
        'NGINX',
        'Express',
        'Amazon Web Services (AWS - S3, EC2, ECS, CloudFormation, ElastiCache)',
        'GitLab pipelines',
        'Serverless',
        'Algolia',
        'mongoDB',
        'Docker',
        'DataDog',
        'JIRA',
        'Microservices architecture',
        '>95% test coverage',
        'unit & e2e tests',
        'Amazon Alexa Skills',
      ],
      company: 'moebel.de',
      dateFinished: '2019',
      dateStarted: '2018',
      description: [
        'Working on developing and maintaining the biggest German furniture search engine in Agile team (4-8 devs + PM + SCRUM Master). Cooperating with 3 other independent teams on delivering new features and maintaining our infrastructure based on microservices.',
      ],
      location: 'Hamburg, GERMANY',
      position: 'Senior Software Engineer',
    },
    {
      buzzwords: [
        'React',
        'Node.js',
        'Ruby',
        'Rails',
        'Spree',
        'ES6',
        'Heroku',
        'Amazon Web Services (AWS)',
        'PostgreSQL',
        'SASS',
        'BEM',
        'Webpacker',
        'Docker',
        'JIRA',
        'Pivotal Tracker',
      ],
      company: 'Spark Solutions',
      dateFinished: '2018',
      dateStarted: '2017',
      description: [
        'Working in SCRUM team on delivering new features for US client (Spree based shop with eye-wear products)',
        'Developed fully functional MVP for UK client (GDPR compliance SaaS application)',
      ],
      location: 'Warsaw, POLAND',
      position: 'Full Stack Developer',
    },
    {
      buzzwords: [
        'React',
        'Redux',
        'Node.js',
        'Angular',
        'ES6',
        'Ruby',
        'Rails',
        'PHP',
        'Heroku',
        'CentOS',
        'Amazon Web Services (AWS)',
        'PostgreSQL',
        'SASS',
        'BEM',
        'Docker',
        'Taiga.io',
      ],
      company: 'Mangaido',
      dateFinished: '2018',
      dateStarted: '2014',
      description: [
        "From 2014 I'm involved in creating my dream project which is a web platform that connect Asian comic creators with Western readers. Together with our Japanese friends we are carving our idea. Mangaido is a comic series translation platform.",
      ],
      location: 'Warsaw, POLAND',
      position: 'Co Founder',
    },
    {
      buzzwords: [
        'Angular',
        'Node.js',
        'ColdFusion (ColdBox)',
        'MySQL',
        'SASS',
        'BEM',
        'Vagrant',
        'SCRUM',
        'Perforce',
        'Gulp',
        'JIRA',
      ],
      company: 'StepStone',
      dateFinished: '',
      dateStarted: '2016',
      description: [
        'At the beginning of 2016 I moved to Brussels and started working in Stepstone - well known job board company, as a Front-end Developer. Later on I started working also as a Back-end guy. The most important experience from that time was working with team in Agile/SCRUM environment. I was working on new version of search application that is used by recruiters all over the world. The biggest challenge was creating one application that is used by clients with different preferences and having lots of complicated facets making this search engine very smart tool. The front-end was done mostly in Angular.js and back-end in ColdFusion.',
      ],
      location: 'Brussels, BELGIUM',
      position: 'Software Engineer',
    },
    {
      buzzwords: [
        'PHP',
        'MySQL',
        'own PHP framework',
        'LAMP Optimization',
        'jQuery',
        'Bootstrap',
        'Angular',
        'WordPress',
        'Photoshop',
        'Illustrator',
      ],
      company: 'fullDive',
      dateFinished: '2016',
      dateStarted: '2014',
      description: [
        'fullDive.jp was a creative agency where me and my friends where working on different, mostly web oriented, projects. I used my skills mostly as a web developer, designer and a Google Trusted Photographer. Often we had to cooperate with other freelance web developers and my role was to plan, split the work and take care of communication layer as what I consider is a core of successful IT projects. During this time we created lots of websites, graphics and Street View Tours for our clients.',
      ],
      location: 'Warsaw, POLAND',
      position: 'Co Founder',
    },
    {
      buzzwords: ['PHP', 'MySQL', 'Mailing Service', 'Real Estate offers scraper app', 'jQuery', 'WordPress'],
      company: 'Wrzosek Nieruchomości',
      dateFinished: '2016',
      dateStarted: '2013',
      description: [
        'I was working in Wrzosek.pl to create and maintain IT infrastructure. Beside taking care of the website, I was responsible for creating and maintaining application that was scraping and categorizing real estate offers from different other websites and sending new offers to agents based on their personal preferences. Thanks to this application company was always up to date with everything that was happening on the market.',
      ],
      location: 'Warsaw, POLAND',
      position: 'Marketing & IT Administration Specialist',
    },
    {
      buzzwords: ['PHP', 'MySQL', 'Facebook App Development', 'jQuery', 'Google Analytics'],
      company: 'mdh sp. z o.o.',
      dateFinished: '2015',
      dateStarted: '2013',
      description: [
        'I was responsible for keeping Memo Facebook fanpage up to date. During my work in MDH we grew fan base from ~6 to ~20 thousand people. I was also responsible for creating Facebook contest app that let us later on grow fan base easily.',
      ],
      location: 'Warsaw, POLAND',
      position: 'Social Media Specialist & Facebook App Developer',
    },
    {
      buzzwords: ['Dalet', 'Audacity'],
      company: 'Polskie Radio S.A.',
      dateFinished: '',
      dateStarted: '2013',
      description: ['I worked there as a journalist and sound technician.'],
      location: 'Warsaw, POLAND',
      position: 'Trainee',
    },
  ],
  person: {
    addressLine1: 'Galvanistraat 707',
    addressLine2: '3029 AD Rotterdam',
    addressLine3: 'THE NETHERLANDS',
    avatarImg: avatar,
    dateOfBirth: '29 Sep 1990',
    email: 'michal@wrzosek.pl',
    fullName: 'Michał Wrzosek',
    nationality: 'Polish',
    phoneNumber: null,
    website: 'https://michal.wrzosek.pl',
  },
  qrCodeValue: 'http://michal.wrzosek.pl',
  sideProjects: [
    {
      description: 'Next.js progressive partial data streaming library',
      title: 'next-data-streaming',
      url: 'https://github.com/michal-wrzosek/next-data-streaming',
    },
    {
      description: 'Styled-Components that are compatible with Next.js server components (RSC)',
      title: 'next-styled-components',
      url: 'https://github.com/michal-wrzosek/next-styled-components',
    },
    {
      description: 'Simple broadcasting tower service - you can broadcast messages and query them',
      title: 'Broadcasting Tower',
      url: 'https://github.com/michal-wrzosek/broadcasting-tower',
    },
    {
      description:
        'ImapEmails is wrapping "imap" and "mailparser" library and exposes simple interface to fetch your latest emails from Gmail or any other inbox supporting IMAP',
      title: 'imap-emails',
      url: 'https://github.com/michal-wrzosek/imap-emails',
    },
    {
      description: 'Simple way to stay up to date with latest UFO news',
      title: 'r/UFOs refresher',
      url: 'https://github.com/michal-wrzosek/ufos-refresher',
    },
    {
      description: 'ZKlar - ZK-Rollups for private transactions on Ethereum using Circom circuits (work in progress)',
      title: 'ZKlar - zero-knowledge technology',
      url: 'https://zklar.com',
    },

    {
      description: 'Decentralized Ethereum Application (DAPP) providing solution for COVID-19 Vaccination Certificates',
      title: 'Vaccination Certificates',
      url: 'https://github.com/michal-wrzosek/vaccination-certificates',
    },

    {
      description: 'Virtual venue video-conferencing application',
      title: 'pitupitu - virtual office app',
      url: 'https://pitupitu.chat/',
    },

    {
      description: 'p2p chat on WebRTC with additional AES256 encryption and file sharing',
      title: 'p2p-chat',
      url: 'https://github.com/michal-wrzosek/p2p-chat',
    },

    {
      description:
        'Boilerplate repo for creating npm packages with React components written in TypeScript and using styled-components.',
      title: 'react-component-lib',
      url: 'https://medium.com/@xfor/developing-publishing-react-component-library-to-npm-styled-components-typescript-cc8274305f5a',
    },

    {
      description: 'React Hooks for Subscribable Subject in Context Pattern.',
      title: 'subscribe-context',
      url: 'https://github.com/michal-wrzosek/subscribe-context',
    },

    {
      description: 'Simple runtime schema validator for projects in Node.js/Typescript.',
      title: 'schemat',
      url: 'https://github.com/michal-wrzosek/schemat',
    },

    {
      description: 'moorage - Server side rendering masonry like react layout component.',
      title: 'moorage',
      url: 'https://github.com/michal-wrzosek/moorage',
    },

    {
      description: 'Express boilerplate',
      title: 'express-boilerplate',
      url: 'https://medium.com/@xfor/express-with-typescript-setup-8d4863e4317e',
    },

    {
      description: 'Create React App Boilerplate',
      title: 'create-react-app-boilerplate',
      url: 'https://medium.com/@xfor/setting-up-your-create-react-app-project-with-typescript-vscode-d83a3728b45e',
    },

    {
      description: 'GraphQL server + JWT authentication with refresh tokens',
      title: 'graphql-jwt-auth-boilerplate',
      url: 'https://github.com/michal-wrzosek/graphql-jwt-auth-boilerplate',
    },

    {
      description: 'Fullstack boilerplate.',
      title: 'web-admin-api',
      url: 'https://github.com/michal-wrzosek/web-admin-api',
    },

    {
      description: 'Fixtures generator package',
      title: 'worp',
      url: 'https://github.com/michal-wrzosek/worp',
    },

    {
      description: 'Demo react search app with authentication',
      title: 'challenge-app',
      url: 'https://github.com/michal-wrzosek/challenge-app',
    },

    {
      description: 'Demo express.js api with authentication',
      title: 'challenge-api',
      url: 'https://github.com/michal-wrzosek/challenge-api',
    },

    {
      description: "React Native 'Getting Things Done' Inbox iOS & Android App",
      title: 'gtd-inbox',
      url: 'https://github.com/michal-wrzosek/gtd-inbox',
    },

    {
      description: 'This is a small Quiz game for Polish speakers learning Russian alphabet.',
      title: 'cyrylica-quiz',
      url: 'https://github.com/michal-wrzosek/cyrylica-quiz',
    },

    {
      description: 'Analysis of company names from Fortune 500 used to generate pseudo-random company names.',
      title: 'deep-names',
      url: 'https://github.com/michal-wrzosek/deep-names',
    },

    {
      description: 'Machine learning model for predicting real estate prices',
      title: 'real-estate-price-prediction',
      url: 'https://github.com/michal-wrzosek/real-estate-price-prediction',
    },

    {
      description: 'e-commerce side project. React + Express.js + Stripe. This project is only partially open sourced',
      title: 'annumi.com',
      url: 'https://annumi.com',
    },
  ],
  skills: {
    iAm: ['Adaptable', 'Calm', 'Cooperative', 'Flexible', 'Hardworking', 'Innovative', 'Optimistic', 'Reliable'],
    iLove: ['Programming (back/front-end)', 'Designing (layouts, logos, flyers, etc.)', 'Studio photography'],
    languages: [
      {
        level: 'native',
        name: 'Polish',
      },
      {
        level: 'fluent',
        name: 'English',
      },
      {
        level: 'communicative',
        name: 'French',
      },
      {
        level: 'learning basics',
        name: 'Dutch',
      },
    ],
    other: ['Driving license cat. B', 'Google Trusted Photographer', 'Sound technician'],
  },
};

export const App: React.VFC = () => (
  <Router>
    <div>
      <Route component={Home} exact={true} path="/" />
      <Route exact={true} path="/cv">
        <CV data={cvData} />
      </Route>
    </div>
  </Router>
);
