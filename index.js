const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require("fs");
const generateHtml = require('./src/generateHtml.js')

//prompts user for employee's info 
// inquirer means you need to download and add it to your project using the command npm install inquirer
const inquirer = require('inquirer');

const managerQuestions = [

    {
        type: "input",
        message: "What is the team manager's name?",
        name: "manager-name"
    },
    {
        type: "input",
        message: "What is their employee id number?",
        name: "manager-id"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "manager-email"
    }
]

const teamQuestions = [

    {
        type: "checkbox",
        message: "please select either engineer or intern to add employee to team.",
        name: "employee-type"
    }
]

const engineerQuestions = [

    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineer-name"
    },
    {
        type: "input",
        message: "What is their emplyee id number?",
        name: "engineer-id"
    },
    {
        type: "input",
        message: "What is their Github username?",
        name: "engineer-github"
    }
]

const internQuestions = [

    {
        type: "input",
        message: "What is the intern's name?",
        name: "intern-name"
    },
    {
        type: "input",
        message: "What is their emplyee id number?",
        name: "intern-id"
    },
    {
        type: "input",
        message: "What is the name of their school?",
        name: "intern-school"
    }
]


//Creates a function to write team.html file
const promptProject = () => inquirer.prompt(managerQuestions);

const writeToFile = (pathName, fileName, data) => {
    if (!fs.existsSync(pathName))
    {
        fs.mkdirSync(pathName);
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(pathName + "/" + fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

//Creates a function to initialize app
function init() { promptProject()
    .then(projectData => {
        return generateHtml(projectData);
    })
    .then( teamHTML => {
        return writeToFile("./dist", "team.html", teamHTML );
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });}


// Function call to initialize app
init();
