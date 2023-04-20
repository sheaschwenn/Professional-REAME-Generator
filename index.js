// Packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");



// Using inquirer to prompt user
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username'
        },
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
        },
        {
            type: 'input',
            message: "What is the best email to contact you at?",
            name: 'email'
        },
        {
            type:'list',
            message:'Which license would you like your project to have?',
            choices:['Apache 2.0 License','GNU','MIT License','BSD2 License','none'],
            name:'license'
        }
    ])
//   getting the user info and rendering it into a markdown file
    .then((data) =>{
        // generating a markdown file using fs and generateMarkdown function from generateMarkdown.js
        fs.writeFile("newREADME.md", generateMarkdown(data), err =>{
            err? console.error(err):console.log("Your README has been created")
       
        })
    })



