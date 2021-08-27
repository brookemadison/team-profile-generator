const Employee = require("../lib/Employee.js");

test('creates an employee object', () => {
    const employee = new Employee("Jake Peralta", 6348748, "jakeperalta@gmail.com");
    
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
})