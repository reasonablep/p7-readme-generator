// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadges = {
  Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache-purple)]',
  BSD: `[![License: BSD](https://img.shields.io/badge/License-BSD)]`,
  GPL: `[![License: GPL](https://img.shields.io/badge/License-GPL-purple)]`,
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}

let licenseLink = {
  Apache: '# License: Apache',
  MIT: '# License: Apache'
}



function getBadge (license) {
  if (license in licenseBadges) {
    console.log('License matched.')
    return licenseBadges[license]
    
  } else {
    return ''
  };
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink = '[License](#license)';
  if (license) {
    return licenseLink
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty strings

function renderLicenseSection(license) {}

// How does one return a section of the README since we are using node? Return it to the terminal? Console?

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}

${getBadge(data.license)}
  
## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- ${licenseLink}
  
## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}`

}

module.exports = { generateMarkdown, getBadge, renderLicenseLink};
