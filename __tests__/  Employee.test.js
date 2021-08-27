const Employee = require("../lib/Employee.js");

test('creates an employee object', () => {
    const employee = new Employee("JakePeralta", 1, "jakeperalta@business.com");

    
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee");
})