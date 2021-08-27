const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () => {
    const engineer = new Engineer("Terry Jeffords", 6789320, "terryjeffords@business.com", "github.com/terryjeffords");
    
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe("Engineer");
})