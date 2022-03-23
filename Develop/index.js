// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const { rejects } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your repository? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose of your project? (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how you would install your repository? (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project? (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any credits or collaborators here.",
        
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license do you have for your project",
        
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test your project?",
        
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) {
            return console.log('There was an error.')
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
