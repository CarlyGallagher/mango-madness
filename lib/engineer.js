const employee = require('./employee');
const inquirer = require('inquirer');

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'engineer';
    }

    getGithub() {
        return this.github
    }
}



const engineerHTMl = ({id, email, github, name}) =>
`<div id="card" class="card employee-card">
<div class="card-header">
    <h2 class="title">${name}</h2>
    <h3 class="title">Engineer</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Github: https://github.com/${github}</li>
    </ul>
</div>
</div>`;