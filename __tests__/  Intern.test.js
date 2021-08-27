const Intern = require("../lib/Intern.js");

test('creates an intern object', () => {
    const intern = new Intern("Gina Linetti", 8237654, "ginalinetti@business.com", "UCF");
    
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe("Intern");
})