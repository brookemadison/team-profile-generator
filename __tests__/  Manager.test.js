const Manager = require("../lib/Manager.js");

test('creates a manager object', () => {
    const manager = new Manager("Ray Holt", 5678639, "rayholt@business.com", 555-555-5555);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getofficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe("Manager");
})