// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
    choices: ['MIT', 'IBM', 'ISC', 'none'],
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
function writeToFile(fileName, data) { 
   fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('./readme/README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
