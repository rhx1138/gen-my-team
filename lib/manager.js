const { createPromptModule } = require('inquirer');
const Employee = require('./employee.js');
const htmlSection = require('./htmlSection.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getHTML() {
        return htmlSection.getHTML(this.getRole(), this.getName(), this.getId(), this.getEmail(), this.getOfficeNumber());
    }
}

module.exports = Manager;