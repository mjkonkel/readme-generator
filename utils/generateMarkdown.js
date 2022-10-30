// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license ==='none'){
    return ''
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ==='none'){
    return ''
  }
  return `- [License](#License)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license ==='none'){
    return ''
  }
  return `## License 
  This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.desc}
  ## Table of Contents
  ${renderLicenseLink(data.license)}
  - [Installation](#Installation)
  - [Testing](#Testing)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Contact](#Contact)
  ${renderLicenseSection(data.license)}
  ## Installation
  To install necessary dependencies, run the following command:  
  ${data.install}
  ## Testing
  To run tests, run the following command:  
  ${data.test}
  ## Usage
  ${data.using}
  ## Contributions 
  ${data.contributing}
  ## Contact
  If you have any questions, I can be reached by email at ${data.email}. My GitHub username is: [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
