import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        days: [
            {
                "id": 1,
                "challengeDay": 1,
                "date": "20190930",
                "dayNotes": [
                    "Installed new Oracle VirtualBox VM",
                    "Installed Node, NPM, Visual Studio Code and related software"
                ]
            },
            {
                "id": 2,
                "challengeDay": 2,
                "date": "20191001",
                "dayNotes": [
                    "Created React project and initial days page"
                ]
            },
            {
                "id": 3,
                "challengeDay": 3,
                "date": "20191002",
                "dayNotes": [
                    "Converted challenge day notes into an array",
                    "Added Header and color fonts and background"
                ]
            },
            {
                "id": 4,
                "challengeDay": 4,
                "date": "20191003",
                "dayNotes": [
                    "Added Bootstrap to project",
                    "Added React Routing to a couple pages",
                    "Navbar - included page links to Resources and About",
                    "Updated Resources and About pages"
                ]
            },
            {
                "id": 5,
                "challengeDay": 5,
                "date": "20191004",
                "dayNotes": [
                    "Context API - how to centralize state data",
                    "Move 'Days' array object out of component and into separate js file"
                ]
            },
            {
                "id": 6,
                "challengeDay": 6,
                "date": "20191005",
                "dayNotes": [
                    "Changed BrowserRouter to HashRouter for future deployment",
                    "First Production Build - npm run build",
                    "Deployed to https://leseanbruneau.github.io/"
                ]
            },
            {
                "id": 7,
                "challengeDay": 7,
                "date": "20191006",
                "dayNotes": [
                    "Added React Tips and Trick Page",
                    "Updated Header section"
                ]
            },
            {
                "id": 8,
                "challengeDay": 8,
                "date": "20191007",
                "dayNotes": [
                    "Add Edit button on Days Page",
                    "Worked on Days Edit Module"
                ]
            },
            {
                "id": 9,
                "challengeDay": 9,
                "date": "20191008",
                "dayNotes": [
                    "Abandoned Edit button on Days Page",
                    "Will include Edit buttons in larger React application"
                ]
            },
            {
                "id": 10,
                "challengeDay": 10,
                "date": "20191010",
                "dayNotes": [
                    "Create New React Project for larger application",
                    "Added React Router - header/navbar"
                ]
            },
            {
                "id": 11,
                "challengeDay": 11,
                "date": "20191012",
                "dayNotes": [
                    "Added other pages - Days, Resources and Shortcuts"
                ]
            },
            {
                "id": 12,
                "challengeDay": 12,
                "date": "20191013",
                "dayNotes": [
                    "Deployed latest Simple React project to GitHub Pages",
                    "Created GitHub Repository for Simple React Project"
                ]
            },
            {
                "id": 13,
                "challengeDay": 13,
                "date": "20191014",
                "dayNotes": [
                    "Created new React project for 100 days of code with Agile Sprints",
                    "Installed Node packages",
                    "Added first few pages in new project"
                ]
            },
            {
                "id": 14,
                "challengeDay": 14,
                "date": "20191016",
                "dayNotes": [
                    "Watched preview sections of new Udemy Course",
                    "Course:  Node.js API Masterclass With Express & MongoDB",
                    "Course Link: https://www.udemy.com/course/nodejs-api-masterclass/?couponCode=OCTOBER999",
                    "Set up and ran example programs"
                ]
            },
            {
                "id": 15,
                "challengeDay": 15,
                "date": "20191017",
                "dayNotes": [
                    "Attended Minneapolis React Meetup October meeting"
                ]
            },
            {
                "id": 16,
                "challengeDay": 16,
                "date": "20191019",
                "dayNotes": [
                    "Reviewed module setup",
                    "CSS for background setting"
                ]
            },
            {
                "id": 17,
                "challengeDay": 17,
                "date": "20191020",
                "dayNotes": [
                    "Converted Class Based Components to Functional Components",
                    "Update Context API from State variable to useState()"
                ]
            },
            {
                "id": 18,
                "challengeDay": 18,
                "date": "20191021",
                "dayNotes": [
                    "(JavaScript) Worked on JavaScript examples with callbacks"
                ]
            },
            {
                "id": 19,
                "challengeDay": 19,
                "date": "20191023",
                "dayNotes": [
                    "(React) Worked some more on Stateless functional components",
                    "(React) Added functional component to React Router "
                ]
            },
            {
                "id": 20,
                "challengeDay": 20,
                "date": "20191026",
                "dayNotes": [
                    "(Angular) For horse racing site - added Breeders' Cup page",
                    "(Angular) Added Service to retreive Breeders' Cup races"
                ]
            },
            {
                "id": 21,
                "challengeDay": 21,
                "date": "20191027",
                "dayNotes": [
                    "(Angular) Formatted added Breeders' Cup page",
                    "(Angular) Added Breeders' Cup races to JSON object"
                ]
            },
            {
                "id": 22,
                "challengeDay": 22,
                "date": "20191028",
                "dayNotes": [
                    "(Angular) Deployed updated horse racing site with Breeders' Cup page",
                    "(Angular) https://landsharkpark.github.io/#/bc"

                ]
            },
            {
              "id": 23,
              "challengeDay": 23,
              "date": "20191030",
              "dayNotes": [
                  "Back to React - Created new JSON object for Sprints",
                  "Defined Days fields and display within Sprint component"

              ]
          },
          {
            "id": 24,
            "challengeDay": 24,
            "date": "20191102",
            "dayNotes": [
                "Created a separated 'Sprint' component",
                "Updated 'Sprints' component - moved individual sprint component into Sprint component"

            ]
        },
        {
          "id": 25,
          "challengeDay": 25,
          "date": "20191104",
          "dayNotes": [
              "Added a 'Show Detail' button to 'Sprint' component",
              "Added function to hide details of a sprint in the 'Sprint' component"
          ]
      },
      {
        "id": 26,
        "challengeDay": 26,
        "date": "20191105",
        "dayNotes": [
          "Fixed CSS formatting on header line",
          "Added components 'Days' and 'Day'"
        ]
      },
      {
        "id": 27,
        "challengeDay": 27,
        "date": "20191106",
        "dayNotes": [
          "Fixed navbar to top of page",
          "Fixed sprint labels and description format",
          "Update labels for example sprints and days"
        ]
      }
]
    }

    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;
