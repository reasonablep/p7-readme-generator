// Build badge and license objects

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

// Return badge if found

function getBadge (license) {
  if (license in licenseBadges) {
    console.log('License matched.')
    return licenseBadges[license]
    
  } else {
    return ''
  };
}

// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license in licenseLink) {
    return licenseLink[license]
  } else {
    return ''
  }
}

// If there is no license, return an empty strings

function renderLicenseSection(license) {
  let licenseSection = '## License'
  if (license) {
    return licenseSection
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getBadge(data.license)}
  
## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Usage](#usage)
- [License](#license)
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
For questions about this project, please reach out to me on GitHub, https://github/${data.questions} or via e-mail at, ${data.email}. Thanks for reading. 
`

}

module.exports = {renderLicenseSection, generateMarkdown, getBadge, renderLicenseLink};
