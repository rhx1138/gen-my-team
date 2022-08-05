// packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const htmlSections = require("./htmlSections.js");
const fs = require("fs");
const generatePage = require('./utils/generatePage.js');

// WHEN I am prompted for my team members and their information

    // THEN I should be able to enter the following information:
    // name, role, email, and GitHub username (if applicable) for each team member.
    // I should be able to enter a project name and description for each project.
    // I should be able to enter a name and description for each badge.
    // I should be able to enter a name and description for each API.

    // WHEN I answer each prompt, the information should be saved to a file that contains the following information:
    // name, role, email, and GitHub username (if applicable) for each team member.

    // Prompt, do you want to add more team members 
    // bass class is employee class = engineer, manager, intern, dropdown selection class
    // last prompt would you like to add a new team member
    // need testing for jest 

    function promptUser() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "title",
                message: "What is your managers title?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your manager's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?"
            }
        ]);
    }
// function to write index.html file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    }

    // function to initialize program
    function init() {
        promptUser().then(function (data) {
            // console.log(data);
            const html = generatePage(data);
            writeToFile("index.html", html);
        });
    }
    init();




