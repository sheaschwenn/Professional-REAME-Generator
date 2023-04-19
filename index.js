// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
// const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your project's title?",
            name: 'title'
        },
        {
            type: 'input',
            message: "Description of your project",
            name: 'description'
        },
        {
        type: 'input',
        message: "What are the installation instructions for your project?",
        name: 'installation'
        },
        {
            type: 'input',
            message: "How can your project be used?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "What are the contribution guidelines for your project?",
            name: 'contribution'
        },
        {
            type: 'input',
            message: "What are the test instructions for your project?",
            name: 'test'
        }
    ])
    .then((data) =>{
        fs.writeFile("newREADME.md", JSON.stringify(data), err =>{
            err? console.error(err):console.log("Your README has been created")
       
        })
    })
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 generateMarkdown(data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
