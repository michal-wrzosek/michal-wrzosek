import React,
{ Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../Home'
import CV from '../CV'
import avatar from './avatar.jpg'

class App extends Component {
  render() {
    const cvData = {
      qrCodeValue: "http://michal.wrzosek.pl",
      person: {
        avatarImg: avatar,
        fullName: "Michał Wrzosek",
        dateOfBirth: "29 Sep 1990",
        nationality: "Polish",
        phoneNumber: null,
        email: "michal@wrzosek.pl",
        website: "https://michal.wrzosek.pl",
        addressLine1: "Galvanistraat 707",
        addressLine2: "3029 AD Rotterdam",
        addressLine3: "NETHERLANDS"
      },
      jobs: [
        {
          dateStarted: "March 2020",
          dateFinished: "present",
          position: "Senior Frontend Engineer",
          company: "Shell",
          location: "Rotterdam, NETHERLANDS",
          description: [
            "Working @ Shell's Agile Tech Hub",
          ],
          buzzwords: [
            "React.js",
            "GraphQL",
            "Node.js",
            "Typescript",
            "styled components",
            "K8s",
            "Kubernetes",
            "JIRA",
          ]
        },
        {
          dateStarted: "Jul 2019",
          dateFinished: "February 2020",
          position: "Senior Software Engineer",
          company: "Valassis Digital",
          location: "Hamburg, GERMANY",
          description: [
            "Valassis is one of the largest coupon distributors/processors in the world. Established 50 years ago it has approximately 7,000 employees in 28 states and 9 countries. Main goal of my team is to maintain and develop new features within solution taking care of coupons and discounts transactions in Europe. We deliver both B2B and B2B2C products where our customers are often the biggest companies in the world.",
          ],
          buzzwords: [
            "React.js",
            "React Native",
            "Expo",
            "iOS & Android development",
            "GraphQL",
            "Apollo Server",
            "Express.js",
            "Node.js",
            "Typescript",
            "Ant Design",
            "Storybook",
            "Backbone",
            "LESS",
            "Bootstrap",
            "Jenkins",
            "JIRA",
          ]
        },
        {
          dateStarted: "Aug 2018",
          dateFinished: "Jun 2019",
          position: "Senior Software Engineer",
          company: "moebel.de",
          location: "Hamburg, GERMANY",
          description: [
            "Working on developing and maintaining the biggest German furniture search engine in Agile team (4-8 devs + PM + SCRUM Master). Cooperating with 3 other independent teams on delivering new features and maintaining our infrastructure based on microservices.",
          ],
          buzzwords: [
            "React.js",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Javascript",
            "Styled-Components",
            "Material UI",
            "Redux",
            "Saga",
            "NGINX",
            "Express",
            "Amazon Web Services (AWS - S3, EC2, ECS, CloudFormation, ElastiCache)",
            "GitLab pipelines",
            "Serverless",
            "Algolia",
            "mongoDB",
            "Docker",
            "DataDog",
            "JIRA",
            "Microservices architecture",
            ">95% test coverage",
            "unit & e2e tests",
            "Amazon Alexa Skills"
          ]
        },
        {
          dateStarted: "Oct 2017",
          dateFinished: "Jul 2018",
          position: "Full Stack Developer",
          company: "Spark Solutions",
          location: "Warsaw, POLAND",
          description: [
            "Working in SCRUM team on delivering new features for US client (Spree based shop with eye-wear products)",
            "Developed fully functional MVP for UK client (GDPR compliance SaaS application)"
          ],
          buzzwords: [
            "React",
            "Node.js",
            "Ruby",
            "Rails",
            "Spree",
            "ES6",
            "Heroku",
            "Amazon Web Services (AWS)",
            "PostgreSQL",
            "SASS",
            "BEM",
            "Webpacker",
            "Docker",
            "JIRA",
            "Pivotal Tracker"
          ]
        },
        {
          dateStarted: "Sep 2014",
          dateFinished: "Jul 2018",
          position: "Co Founder",
          company: "Mangaido",
          location: "Warsaw, POLAND",
          description: [
            "From 2014 I'm involved in creating my dream project which is a web platform that connect Asian comic creators with Western readers. Together with our Japanese friends we are carving our idea. Mangaido is a comic series translation platform."
          ],
          buzzwords: [
            "React",
            "Redux",
            "Node.js",
            "Angular",
            "ES6",
            "Ruby",
            "Rails",
            "PHP",
            "Heroku",
            "CentOS",
            "Amazon Web Services (AWS)",
            "PostgreSQL",
            "SASS",
            "BEM",
            "Docker",
            "Taiga.io"
          ]
        },
        {
          dateStarted: "Mar 2016",
          dateFinished: "Jul 2016",
          position: "Software Engineer",
          company: "StepStone",
          location: "Brussels, BELGIUM",
          description: [
            "At the beginning of 2016 I moved to Brussels and started working in Stepstone - well known job board company, as a Front-end Developer. Later on I started working also as a Back-end guy. The most important experience from that time was working with team in Agile/SCRUM environment. I was working on new version of search application that is used by recruiters all over the world. The biggest challenge was creating one application that is used by clients with different preferences and having lots of complicated facets making this search engine very smart tool. The front-end was done mostly in Angular.js and back-end in ColdFusion."
          ],
          buzzwords: [
            "Angular",
            "Node.js",
            "ColdFusion (ColdBox)",
            "MySQL",
            "SASS",
            "BEM",
            "Vagrant",
            "SCRUM",
            "Perforce",
            "Gulp",
            "JIRA"
          ]
        },
        {
          dateStarted: "Jan 2014",
          dateFinished: "Feb 2016",
          position: "Co Founder",
          company: "fullDive",
          location: "Warsaw, POLAND",
          description: [
            "fullDive.jp was a creative agency where me and my friends where working on different, mostly web oriented, projects. I used my skills mostly as a web developer, designer and a Google Trusted Photographer. Often we had to cooperate with other freelance web developers and my role was to plan, split the work and take care of communication layer as what I consider is a core of successful IT projects. During this time we created lots of websites, graphics and Street View Tours for our clients."
          ],
          buzzwords: [
            "PHP",
            "MySQL",
            "own PHP framework",
            "LAMP Optimization",
            "jQuery",
            "Bootstrap",
            "Angular",
            "WordPress",
            "Photoshop",
            "Illustrator"
          ]
        },
        {
          dateStarted: "Dec 2013",
          dateFinished: "Feb 2016",
          position: "Marketing & IT Administration Specialist",
          company: "Wrzosek Nieruchomości",
          location: "Warsaw, POLAND",
          description: [
            "I was working in Wrzosek.pl to create and maintain IT infrastructure. Beside taking care of the website, I was responsible for creating and maintaining application that was scraping and categorizing real estate offers from different other websites and sending new offers to agents based on their personal preferences. Thanks to this application company was always up to date with everything that was happening on the market."
          ],
          buzzwords: [
            "PHP",
            "MySQL",
            "Mailing Service",
            "Real Estate offers scraper app",
            "jQuery",
            "WordPress"
          ]
        },
        {
          dateStarted: "Jun 2013",
          dateFinished: "Jan 2015",
          position: "Social Media Specialist & Facebook App Developer",
          company: "mdh sp. z o.o.",
          location: "Warsaw, POLAND",
          description: [
            "I was responsible for keeping Memo Facebook fanpage up to date. During my work in MDH we grew fan base from ~6 to ~20 thousand people. I was also responsible for creating Facebook contest app that let us later on grow fan base easily."
          ],
          buzzwords: [
            "PHP",
            "MySQL",
            "Facebook App Development",
            "jQuery",
            "Google Analytics"
          ]
        },
        {
          dateStarted: "Jun 2013",
          dateFinished: "Aug 2013",
          position: "Trainee",
          company: "Polskie Radio S.A.",
          location: "Warsaw, POLAND",
          description: [
            "I worked there as a journalist and sound technician."
          ],
          buzzwords: [
            "Dalet",
            "Audacity"
          ]
        }
      ],
      sideProjects: [
        {
          title: "react-component-lib",
          url: "https://medium.com/@xfor/developing-publishing-react-component-library-to-npm-styled-components-typescript-cc8274305f5a",
          description: "Boilerplate repo for creating npm packages with React components written in TypeScript and using styled-components.",
        },

        {
          title: "subscribe-context",
          url: "https://github.com/michal-wrzosek/subscribe-context",
          description: "React Hooks for Subscribable Subject in Context Pattern.",
        },

        {
          title: "schemat",
          url: "https://github.com/michal-wrzosek/schemat",
          description: "Simple runtime schema validator for projects in Node.js/Typescript.",
        },

        {
          title: "moorage",
          url: "https://github.com/michal-wrzosek/moorage",
          description: "moorage - Server side rendering masonry like react layout component.",
        },

        {
          title: "express-boilerplate",
          url: "https://medium.com/@xfor/express-with-typescript-setup-8d4863e4317e",
          description: "Express boilerplate",
        },

        {
          title: "create-react-app-boilerplate",
          url: "https://medium.com/@xfor/setting-up-your-create-react-app-project-with-typescript-vscode-d83a3728b45e",
          description: "Create React App Boilerplate",
        },

        {
          title: "graphql-jwt-auth-boilerplate",
          url: "https://github.com/michal-wrzosek/graphql-jwt-auth-boilerplate",
          description: "GraphQL server + JWT authentication with refresh tokens",
        },

        {
          title: "web-admin-api",
          url: "https://github.com/michal-wrzosek/web-admin-api",
          description: "Fullstack boilerplate.",
        },

        {
          title: "worp",
          url: "https://github.com/michal-wrzosek/worp",
          description: "Fixtures generator package",
        },

        {
          title: "challenge-app",
          url: "https://github.com/michal-wrzosek/challenge-app",
          description: "Demo react search app with authentication",
        },

        {
          title: "challenge-api",
          url: "https://github.com/michal-wrzosek/challenge-api",
          description: "Demo express.js api with authentication",
        },

        {
          title: "gtd-inbox",
          url: "https://github.com/michal-wrzosek/gtd-inbox",
          description: "React Native 'Getting Things Done' Inbox iOS & Android App",
        },

        {
          title: "cyrylica-quiz",
          url: "https://github.com/michal-wrzosek/cyrylica-quiz",
          description: "This is a small Quiz game for Polish speakers learning Russian alphabet.",
        },

        {
          title: "deep-names",
          url: "https://github.com/michal-wrzosek/deep-names",
          description: "Analysis of company names from Fortune 500 used to generate pseudo-random company names.",
        },

        {
          title: "real-estate-price-prediction",
          url: "https://github.com/michal-wrzosek/real-estate-price-prediction",
          description: "Machine learning model for predicting real estate prices",
        },

        {
          title: "annumi.com",
          url: "https://annumi.com",
          description: "e-commerce side project. React + Express.js + Stripe. This project is only partially open sourced",
        },
      ],
      education: [
        {
          dateStarted: "2012",
          dateFinished: "2015",
          university: "Warsaw University of Technology",
          faculty: "Faculty of Electrical Engineering",
          fieldOfStudy: "Automatics and Robotics"
        },
        {
          dateStarted: "2011",
          dateFinished: "2014",
          university: "Warsaw University of Technology",
          faculty: "Faculty of Management",
          fieldOfStudy: "Business Informatics"
        }
      ],
      skills: {
        languages: [
          {
            name: "Polish",
            level: "mother language"
          },
          {
            name: "English",
            level: "fluent"
          },
          {
            name: "Japanese",
            level: "learning basics"
          }
        ],
        iAm: [
          "Adaptable",
          "Calm",
          "Cooperative",
          "Flexible",
          "Hardworking",
          "Innovative",
          "Optimistic",
          "Reliable"
        ],
        iLove: [
          "Programming (back/front-end)",
          "Designing (layouts, logos, flyers, etc.)",
          "Studio photography"
        ],
        other: [
          "Driving license cat. B",
          "Google Trusted Photographer",
          "Sound technician"
        ]
      }
    }

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" render={() => (
            <CV data={cvData} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
