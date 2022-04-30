// List of Dependencies. Include packages needed for this application:
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input:
const questions = [

    {
        type:'input',
        name:'username',
        message:'test',
    },
    {
        type:'input',
        name:'email',
        message:'test',
    },
    {
        type:'input',
        name:'repo',
        message:'test',
    },
    {
        type:'input',
        name:'description',
        message:'test',
    },
    {
        type:'input',
        name:'instructions',
        message:'test',
    },
    {
        type:'input',
        name:'usage',
        message:'test',
    },
    {
        type:'checkbox',
        name:'licenses',
        message:'test',
    },
    {
        type:'input',
        name:'contributing',
        message:'test',
    },
    {
        type:'input',
        name:'tests',
        message:'test',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
