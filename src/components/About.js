import React from 'react'

export default function About() {
    return (
        <div className="container">
            <p className='display-4'>About This Project</p>
            <hr />
            <div className="display-5">
                <p>Approximately a "70 Days of Code Challenge" - or "Whatever I can get done before the 2019 holidays"</p>
                <p>
                    Simple Goal:  Learn React by building a web site to journal a 100 Days of Code Challenge.
                </p>
                <p>
                    This site is a simple React application to journal steps building a larger React 
                    application.  This site loads all data at startup using React's Context API.   
                </p>
                <p>
                  The new application with Agile format will start out using React's Context API, and then migrate over 
                  to a server database (either Firebase or MongoDB) using Axios npm package.  The new site will 
                  make the site easier to maintain, more organized for reading and daily updates.  The end goal is to 
                  have the new site ready for an official 100 Days of Challenge in January 2020.
                </p>
                <p>
                    For "modified" Agile format, I'm thinking on the following: 
                </p>
                <ul>
                    <li>10 Sprints for 100 Days of Code Challenge</li>
                    <li>10 Days of Coding per Sprint</li>
                    <li>Each Sprint will have 14 Calendar days - 10 days of code, 4 "off days"</li>
                    <li>Sprint Planning - State high level goal(s) to accomplish during Sprint</li>
                    <li>Sprint Review - Quick notes for lessons learned, accomplishments</li>
                </ul>
                <p>
                    Note: The added "Agile format" is not meant to distract from coding exercises in the 
                    100 Days of Code Challenge.  Sprint Planing and Review are meant to be short, quick 
                    notes.  Agile format would help me set short term goals in addition to formatting 
                    and publishing organized journal entries.
                </p>
                <p>
                  GitHub repository and sites locations listed below.
                </p>
                <p>
                    <div><strong>Starter React Project - simple static web site using Context API</strong></div>
                    <div class="px-4">
                      GitHub Repository: <a className="pl-3" href="https://github.com/leseanbruneau/react-code-challenge-journal.git" target="_blank" rel="noopener noreferrer">https://github.com/leseanbruneau/react-code-challenge-journal.git</a>
                    </div>
                    <div class="px-4">
                      React Website: <a className="pl-3" href="https://leseanbruneau.github.io/" target="_blank" rel="noopener noreferrer">https://leseanbruneau.github.io/</a>
                    </div>
                </p>
                <p>
                    <div><strong>Agile React Project - working project with more web site features</strong></div>
                    <div class="px-4">
                      GitHub Repository: <a className="pl-3" href="https://github.com/leseanbruneau/react-code-challenge-journal.git" target="_blank" rel="noopener noreferrer">https://github.com/leseanbruneau/react-code-challenge-journal.git</a>
                    </div>
                    <div class="px-4">
                      React Website: <a className="pl-3" href="https://leseanbruneau.github.io/" target="_blank" rel="noopener noreferrer">https://leseanbruneau.github.io/</a>
                    </div>
                </p>
            </div>


        </div>
    )
}
