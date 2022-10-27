// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs');

const createREADME = ({ title, desc, license, username, email, install, test, using, contributing}) =>
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
${license}
## Installation
${install}
## Testing
${test}
## Usage
${using}
## Contributions 
${contributing}
## Contact
If you have any questions, I can be reached by email at [${email}](${email}). My GitHub username is: [${username}](https://github.com/${username}).
`

inquirer
    .prompt([
        {
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
            choices: ['MIT', 'The Unlicense', 'ISC'],
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
        },
    ])
    .then((data) => {
        const readme = createREADME(data);
        fs.writeFile('.README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success! Generating README')
        )
    })


