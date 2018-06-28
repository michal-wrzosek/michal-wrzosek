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
        phoneNumber: "(+48) 690-56-26-46",
        email: "michal@wrzosek.pl",
        website: "michal.wrzosek.pl",
        addressLine1: "ul. Bachmacka 6/26 m. 26",
        addressLine2: "02-647 Warszawa, POLAND",
        addressLine3: "(willing to relocate in EU)"
      },
      jobs: [
        {
          dateStarted: "Oct 2017",
          dateFinished: "Present",
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
          dateFinished: "Present",
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
            "At the beggining of 2016 I moved to Brussels and started working in Stepstone - well known job board company, as a Front-end Developer. Later on I started working also as a Back-end guy. The most important experience from that time was working with team in Agile/SCRUM envirament. I was working on new version of search application that is used by recruiters all over the world. The biggest challange was creating one application that is used by clients with different preferences and having lots of complicated facets making this search engine very smart tool. The front-end was done mostly in Angular.js and back-end in ColdFusion."
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
