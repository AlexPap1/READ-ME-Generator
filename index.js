// List of Dependencies. Include packages needed for this application:
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input:
const questions = [

    {
        type:'input',
        name:'username',
        message:'What is your GitHub Username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type:'input',
        name:'repo',
        message:'What is the name of your repository?',
    },
    {
        type:'input',
        name:'description',
        message:'Please describe the function of your repo:',
    },
    {
        type:'input',
        name:'instructions',
        message:'What dependencies are required to install?',
    },
    {
        type:'input',
        name:'usage',
        message:'What is the use for this repo?',
    },
    {
        type:'checkbox',
        name:'licenses',
        message:'What licenses are used in this repo?',
        //add choices
        choices: ['1', '2']
    },
    {
        type:'input',
        name:'contributing',
        message:'Who are the contributors to this repo?',
    },
    {
        type:'input',
        name:'tests',
        message:'What instructions are needed to test your repo?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            writeToFile("./README.md", generateMarkdown(answers))
        })
};

// Function call to initialize app
init();
