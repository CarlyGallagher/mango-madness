// create the team
const generateTeam = (team) => {
    // create the manager html
    const generateManager = (manager) => {
        return `                
        <div id="card" class="card employee-card">
        <div class="card-header">
            <h2 class="title">${manager.getName()}</h2>
            <h3 class="title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Id: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
    };

    // create the html for engineers
    const generateEngineer = (engineer) => {
        return `
        <div id="card" class="card employee-card">
        <div class="card-header">
            <h2 class="title">${engineer.getName()}</h2>
            <h3 class="title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
          `;
    };

    // create the html for interns
    const generateIntern = (intern) => {
        return `
        <div id="card" class="card employee-card">
        <div class="card-header">
            <h2 class="title">${intern.getName()}</h2>
            <h3 class="title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intenr.getSchool}</li>
            </ul>
        </div>
    </div>
          `;
    };

    const html = [];

    html.push(
        team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );

    return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css ">
        <title>Team Members</title>
    </head>
    
    <body>
        <div id="header" class="container-fluid">
            <div class="row">
                <div class="col-12 p-5 mb-3">
                    <h1>Teammates</h1>
                </div>
            </div>
        </div>
        <div id="card-section" class="container">
            <div class="row">
                <div class="team col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
};