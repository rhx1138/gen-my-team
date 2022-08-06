// TODO: add cards to the HTML page for each team member

const managerSection = function (data) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.title}</h6>
        <p class="card-text">ID: ${data.id}</p>
        <p class="card-text">Email: ${data.email}</p>
        <p class="card-text">Office Number: ${data.officeNumber}</p>
    </div>
</div>`;
}


const internSection = function (data) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.title}</h6>
        <p class="card-text">ID: ${data.id}</p>
        <p class="card-text">Email: ${data.email}</p>
        <p class="card-text">School: ${data.school}</p>
    </div>
</div>`;
}

const engineerSection = function (data) {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.title}</h6>
        <p class="card-text">ID: ${data.id}</p>
        <p class="card-text">Email: ${data.email}</p>
        <p class="card-text">GitHub: ${data.github}</p>
    </div>
</div>`;
}

module.exports = {
    managerSection,
    internSection,
    engineerSection
}
