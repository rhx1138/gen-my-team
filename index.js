// packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const htmlSections = require("./lib/htmlSection.js");
const fs = require("fs");
// const generatePage = require('./utils/generatePage.js');

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
// function to build team members and their information 
function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is your team member's role?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]

}
    ]).then((answer) => {
        if (answer.role === "Engineer") {
            return inquirer.prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "What is your engineer's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your engineer's ID number?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your engineer's email?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is your engineer's GitHub username?"
                }
            ]);
        } else if (answer.role === "Intern") {
            return inquirer.prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "What is your intern's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your intern's ID number?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your intern's email?"
                },
                {
                    type: "input",
                    name: "school",
                    message: "What is your intern's school?"
                }
            ]);
        } else {
            return;
        }
    }).then((answer) => {
        if (answer.role === "Engineer") {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            return engineer;
        } else if (answer.role === "Intern") {
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            return intern;
        } else {
            return;
        }
    }).then((employee) => {
        if (employee) {
            team.push(employee);
        } else {
            return;
        }
    }
    ).then(() => { 
        promptUser();
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}


    



// function to write index.html file
 function writeToFile (data) {
    fs.writeFile("index.html", data, function (err) {
        if (err) {
            return console.log(err);

} else {
    console.log("Success!");
}
    });
}
// function to build html page
function buildPage (data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.role;
        if (role === "Manager") {
            html += htmlSections.managerSection(employee);
        } else if (role === "Engineer") {
            html += htmlSections.engineerSection(employee);
        } else if (role === "Intern") {
            html += htmlSections.internSection(employee);
        }
    }
    return html;
}



    // function to initialize program
    // function init() {
    //     promptUser().then(function (data) {
    //         // console.log(data);
    //         const html = generatePage(data);
    //         writeToFile("index.html", html);
    //     });
    // }
    // init();

    // function to initialize program
    function init() {
        promptUser().then(function (data) {
            // console.log(data);
            const team = buildTeam(data);
            const html = buildPage(team);
            writeToFile(html);
        });
    }
    init();






