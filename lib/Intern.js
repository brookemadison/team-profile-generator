class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school =school;
    }

    // returns an object with intern's info
    getName() { return this.name; };
    getId() { return this.id; };
    getEmail() { return this.email; };
    getSchool() { return this.school};
    getRole() { return "Intern"; };
}

module.exports = Intern;