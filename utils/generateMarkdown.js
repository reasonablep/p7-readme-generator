// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadges = {
  Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache-purple)]',
  BSD: `[![License: BSD](https://img.shields.io/badge/License-BSD)]`,
  GPL: `[![License: GPL](https://img.shields.io/badge/License-GPL-purple)]`,
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}

let licenseLink = {
  Apache: '#[License: Apache](#License)',
  BSD: '#[License: BSD](#License)',
  GPL: '#[License: Apache](#License)',
  MIT: '#[License: MIT](#License)'

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
  if (license in licenseLink) {
    return licenseLink[license]
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty strings

function renderLicenseSection(license) {
  let licenseSection = '## License'
  if (license) {
    return licenseSection
  } else {
    return ''
  }
}

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
- ${licenseLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, please reach out to me on GitHub, https://github/${data.questions}. Thanks for reading. 
`

}

module.exports = {renderLicenseSection, generateMarkdown, getBadge, renderLicenseLink};
