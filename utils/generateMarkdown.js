// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadges = {
  Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache-purple)](https://www.apache.org/licenses/LICENSE-2.0)',
  BSD: `[![License: BSD](https://img.shields.io/badge/License-BSD)](https://opensource.org/license/bsd-3-clause/)`,
  GPL: `[![License: GPL](https://img.shields.io/badge/License-GPL-purple)](https://www.gnu.org/licenses/gpl-3.0.en.html)`,
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/license/mit)',
};

function getBadge (license) {
  if (license in licenseBadges) {
    console.log('License matched.')
    return licenseBadges[license]
    
  } else {
    return ''
  };
}



function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty strings

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = { generateMarkdown, getBadge };
