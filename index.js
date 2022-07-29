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
                name: "title",
                message: "What is your title?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID number?"
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




console.log("connected to index.js");