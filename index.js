//Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const {getBadge, renderLicenseLink, generateMarkdown} = require ('./utils/generateMarkdown.js');

//Create an array of questions for user input

function generateReadme () {

inquirer.prompt([

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation'

    },

    {

        type: 'input',
        message: 'Please provide usage information.',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'Please select your license.',
        name: 'license',
        choices: [
            "Apache",
            "BSD",
            "MIT",
            "GPL",
            ""
        ]
    },

    {
        type: 'input',
        message: 'Please provide instructions for contribution.',
        name: 'contributing'
    },

    {
        type: 'input',
        message: 'Please provide instructions for testing.',
        name: 'tests'
    },

    {

        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'questions'

    }
])

    // Create a function to write README file

    .then(answers => {

        console.log(answers);

        let templateData = generateMarkdown(answers)
        console.log('this is template data');
        console.log(templateData);

        let licenseData = renderLicenseLink(answers)
        console.log('license');
        console.log(licenseData);

        let badgeObject = getBadge(answers);
        console.log(badgeObject)

        // const licenseBadge = getBadge(answers.license);
        // const licenseLink = renderLicenseLink(answers.license);
        // console.log(licenseBadge);
        // console.log(licenseLink);

        fs.writeFile('README.md', templateData, (err) => {
            err ? console.log(err) :
                console.log('README generated!');

        })

    })

};

// Create a function to initialize app

generateReadme();
