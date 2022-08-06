// generate HTML page
const generatePage = require('./utils/generatePage.js');

// generate card for each team member
const Manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');

// fs and inquirer are required to run this program
const inquirer = require("inquirer"); 
const fs = require("fs");

const teamArray = [];


    function promptManager() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name or your manager's name?"
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
                name: "officeNumber",
                message: "What is your office number?"
            },
            {
                type: "confirm",
                name: "confirmAddEmployee",
                message: "Would you like to add another employee?"
            }
        ])
        .then(managerInput => {
            const  { name, id, email, officeNumber } = managerInput; 
            const manager = new Manager (name, id, email, officeNumber);
    
            teamArray.push(manager);
            // return managerInput(teamArray); 
            console.log(manager); 
        })
        
    };

// inquirer to prompt user for team member type
    const addTeamMember = () => {
        console.log("Please select the type of team member you would like to add:")
        return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "What is the type of team member you would like to add?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is their GitHub username?",
                when: (input) => {
                    return input.role === "Engineer";
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is their school name?",
                when: (input) => {
                    return input.role === "Intern";
                }   
            },
            {
                type: "confirm",
                name: "confirmAddEmployee",
                message: "Would you like to add another employee?"
            }
        ])
        .then(employeeData => {
            let {name, id, email, role, github, school, confirmAddTeamMember} = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new engineer(name, id, email, github);
                console.log(employee);
            } else if (role === "Intern") {
                employee = new intern(name, id, email, school);
                console.log(employee);
            }
            teamArray.push(employee);
            if (confirmAddTeamMember) {
                return addTeamMember(teamArray);
            } else {
                return teamArray;
            }
        })
    };
    

// function to write index.html file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    }

    promptManager()
    .then(addTeamMember)
    .then(teamArray => {
        return generatePage(teamArray);
    })
    .then(html => {
        writeToFile("index.html", html);
    })
    .catch(err => {
        console.log(err);
    });
    // console.log(teamArray);




