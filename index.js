const inquirer = require('inquirer');
const fs = require('fs');


// lib modules
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

// Array for answers to questions
const newTeamMemberData = [];

// Array object questions asked in CLI to user
const questions = async () => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your ID number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
        },
        {
          type: "list",
          message: "What is your role?",
          name: "role",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
  
  
      
      //  console.log(answers);
        // if manager selected, answer these specific question
        if (answers.role === "Manager") {
          const managerAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your office number",
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
            
          // if engineer selected answer these set of questions
        } else if (answers.role === "Engineer") {
          const githubAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your GitHub user name?",
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
            
          // if intern selected answer these set of questions
        } else if (answers.role === "Intern") {
          const internAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What university did you attend?",
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
  
  }; //end of questions function
  
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
  
  function createTeam () {
    console.log("new guy", newStaffMemberData)
    fs.writeFileSync(
      "./output/index.html",
      generateTeam(newStaffMemberData),
      "utf-8"
    );
  }



// inquirer
// .prompt([
//     {
//         type: 'input',
//         name: 'manager',
//         message: 'what is the team managers name?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is the email of your manager?'
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is the managers id?',
//     },
//     {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'What is the Manager office number?',
//     },
//     {
//         type: 'list',
//         name: 'teamMembers',
//         message: 'What type of team member would you like to add next?',
//         choices: ['engineer', 'intern', 'I dont wnat to add any more team members.',],

//     },
// ])

// .then((data) => {
//     fs.writeFile('team.html', template(data), (err) => {
//         err ? console.log(err) : console.log('Your team has been created!')
//     })
//     });

// const template = ({}) =>
// `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
//     <link rel="stylesheet" href="style.css ">
//     <title>Team Members</title>
// </head>

// <body>
//     <div id="header" class="container-fluid">
//         <div class="row">
//             <div class="col-12 p-5 mb-3">
//                 <h1>Teammates</h1>
//             </div>
//         </div>
//     </div>
//     <div id="card-section" class="container">
//         <div class="row">
//             <div class="team col-12 d-flex justify-content-center">
//                 <div id="card" class="card employee-card">
//                     <div class="card-header">
//                         <h2 class="title">${name}</h2>
//                         <h3 class="title">Manager</h3>
//                     </div>
//                     <div class="card-body">
//                         <ul class="list-group">
//                             <li class="list-group-item">Id: ${id}</li>
//                             <li class="list-group-item">${email}</li>
//                             <li class="list-group-item">Office number: ${officeNumber}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>
// </html>
// `