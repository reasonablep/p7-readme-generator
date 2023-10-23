// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs = require(fs);

function renderLicenseBadge(license) {
    fs.readFile('README.md', 'utf8', function (err, data) {
      if (err) { console.log (error);
      }

      else {
        const jsonData = JSON.parse(data);
        console.log(data);
        return jsonData.license;
      }

      
      err ? console.log(err):
      console.log('Lisence badge generated.');
   
    })
  }

  renderLicenseBadge();

    // }).then(answers => {
    //   let licenseBadge = JSON.parse()
    // })
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
