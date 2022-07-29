// packages needed for this application
const inquirer = require("inquirer"); 
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
    function promptUser() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "title",
                message: "What is your title?"
            },
            {
                type: "input",
                name: "description",
                message: "What is your description?"
            },
            {
                type: "input",
                name: "installation",
                message: "What is your installation?"
            },
            {
                type: "input",
                name: "usage",
                message: "What is your usage?"
            },
            {
                type: "input",
                name: "license",
                message: "What is your license?"
            },
            {
                type: "input",
                name: "contributing",
                message: "What is your contributing?"
            },
            {
                type: "input",
                name: "tests",
                message: "What is your tests?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "date",
                message: "What is your date?"
            }
        ]);
    }

    

console.log("connected to index.js");