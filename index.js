// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

const generateMrkdwn = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",

        message: "What is the name of your project?",

        name: "Title"
    },
    {
        type: "input",

        message: "Tell us about your project! Enter your description!",

        name:"Description"
    },
    {
        type: "input",

        message: "Table of contents",

        name: "Table of Contents"
    },
    {
        type: "input",

        message: "Are there any installations needed to run your application?",

        name: "Installs"
    },
    {
        type: "input",

        message: "What is the purpose of this app? How is it used?",

        name: "Usage"
    },
    {
        type: "input",

        message: "Were there any contributions to your project?",

        name: "Contributions"
    },
    {
        type: "input",

        message: "Are there test instructions?",

        name: "Tests"
    },  
    {   type: "input",

        message: "What licenses are being used?",

        name: "License"
    },
    {
        type: "input",

        message: "Whats your github username?",

        name: "Username"
    },
    {
        type: "input",

        message: "What email would you like to use for contact?",

        name: "Email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {

    if (err) {

        return console.log(err);

    };

    console.log("File was created succesfully: " + fileName);

});

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)

    .then(function(data){

        writeToFile("./demo/readMeDemo.md", generateMrkdwn(data));

    });
}

// Function call to initialize app
init();
