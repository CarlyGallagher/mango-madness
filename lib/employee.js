class employee {
    constructor(name, id, email) {
        this.name =name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getemail() {
        return this.email;
    }

    getRole() {
        return 'employee'
    }
}

<div id="card" class="card employee-card">
<div class="card-header">
    <h2 class="title">name</h2>
    <h3 class="title">employee</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">Id: 524</li>
        <li class="list-group-item">Email:<a href="mailto:test@email.com"></a></li>
        <li class="list-group-item">Office number: 10</li>
    </ul>
</div>
</div>