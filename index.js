// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'desc',
    message: 'Please write a short description of your project.',
},
{
    type: 'list',
    message: 'What type of license are you using?',
    name: 'license',
    choices: ['MIT', 'IBM', 'ISC'],
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the your email address?',
},
{
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
},
{
    type: 'input',
    name: 'using',
    message: 'What does the user need to know about using the repo?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();




const createREADME = ({title, desc, license, username, email, install, test, using, contributing}) =>
`
# ${title}
## Description
${desc}
## Table of Contents
- [License](#License)
- [Installation](#Installation)
- [Testing](#Testing)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Contact](#Contact)
## License 
[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})  
This project is licensed under the ${license} license.
## Installation
To install necessary dependencies, run the following command:  
> <span style="font-family:Serif; font-size:1.2em;">${install}</span>
## Testing
To run tests, run the following command:  
> <span style="font-family:Serif; font-size:1.2em;">${test}</span>
## Usage
${using}
## Contributions 
${contributing}
## Contact
If you have any questions, I can be reached by email at [${email}](${email}). My GitHub username is: [${username}](https://github.com/${username}).
`

inquirer
    .prompt(questions)
    .then((data) => {
        const readme = createREADME(data);
        fs.writeFile('.README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success! Generating README')
        )
    })


