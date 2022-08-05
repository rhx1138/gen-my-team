const { createPromptModule } = require('inquirer');
const Employee = require('./employee.js');
const htmlSection = require('./htmlSection.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
    
    getHTML() {
        return htmlSection.getHTML(this.getRole(), this.getName(), this.getId(), this.getEmail(), this.getGithub());
    }
}

module.exports = Engineer;