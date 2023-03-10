const employee = require('./employee')

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'intern';
    }

    getSchool() {
        return this.school;
    }
}

const internHTML = ({id, email, school, name}) =>

`
<div id="card" class="card employee-card">
<div class="card-header">
    <h2 class="title">${name}</h2>
    <h3 class="title">Intern</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
</div>
</div>
`