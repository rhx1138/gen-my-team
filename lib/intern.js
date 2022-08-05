const { createPromptModule } = require('inquirer');
const Employee = require('./employee.js');
const htmlSection = require('./htmlSection.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    getHTML() {
        return htmlSection.getHTML(this.getRole(), this.getName(), this.getId(), this.getEmail(), this.getSchool());
    }
}

module.exports = Intern;