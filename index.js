//Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const {getBadge} = require ('./utils/generateMarkdown.js');

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
            "MIT",
            "BSD",
            "GPL"
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
        name: 'github'

    }
])

    // Create a function to write README file

    .then(answers => {
        const licenseBadge = getBadge(answers.license);
        console.log(licenseBadge);
        fs.writeFile('README.md', JSON.stringify(answers, null, 20), (err) => {
            err ? console.log(err) :
                console.log('README generated!');

        })

    })

};

// Create a function to initialize app

generateReadme();
