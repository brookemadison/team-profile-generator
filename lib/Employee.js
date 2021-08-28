class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

     // returns an object with employee's info
    getName() { return this.name;};
    getId() { return this.id; };
    getEmail() { return this.email; };
    getRole() { return "Employee"; };
}

module.exports = Employee;