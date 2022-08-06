// generate HTML page
const generatePage = require('./utils/generatePage.js');

// generate card for each team member
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');

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
            } 

        ])
      
        .then(employeeData => {
            let {name, id, email, officeNumber} = employeeData;
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

    // function to initialize program
    function init() {
        promptManager().then(function (data) {
            // console.log(data);
            const html = generatePage(data);
            writeToFile("index.html", html);
        });
    }
    init();




