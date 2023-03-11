// inquirer / node module
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");

// pulls data from lib
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMemberData = [];

// CLI questions
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is their role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])


    
      // if manager selected, answer these specific question
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is their office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newStaffMemberData.push(newManager);
          
        // if engineer selected answer these questions
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is their GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newStaffMemberData.push(newEngineer);
          
        // if intern selected answer these questions
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did they attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newStaffMemberData.push(newIntern);          
      } 

};

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();

// creates the html in output folder
function createTeam () {
  console.log("new staff members", newStaffMemberData)
  fs.writeFileSync(
    "./output/index.html",
    generateTeam(newStaffMemberData),
    "utf-8"
  );
}

