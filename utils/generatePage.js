// function that generates new badges for index.html file
function generatePage(data) { 
    let html = ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gen My Team</title>
        <!-- bootstrap cdn -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    </head>
    <body>
    <!-- title header is centered with red background color at the top -->
    <div class="row" style="background-color: rgb(230, 65, 65) ;">
        <div class="col-md-12">
            <h1 class="text-center" style="color: white ;">Gen My Team</h1>
        </div>
    </div>

    </body>
    </html>`;
    data.forEach(function(employee) {
        html += generateBadges(employee);
    }
    );
    return html;
}

// create manager card for index.html file
const generateManagerCard = (manager) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-subtitle">${manager.getId()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${manager.getEmail()}</p>
            <p class="card-text">${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `;
}

// create engineer card for index.html file

const generateEngineerCard = (engineer) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-subtitle">${engineer.getId()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${engineer.getEmail()}</p>
            <p class="card-text">${engineer.getGithub()}</p>
        </div>
    </div>
    `;
}

// create intern card for index.html file
const generateInternCard = (intern) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-subtitle">${intern.getId()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${intern.getEmail()}</p>
            <p class="card-text">${intern.getSchool()}</p>
        </div>
    </div>
    `;
}

// push data from index to html file
generatePage = data => {
    pageArray = [];

    data.forEach(function(employee) {
        if (employee.getRole() === "Manager") {
            pageArray.push(generateManagerCard(employee));
        } else if (employee.getRole() === "Engineer") {
            pageArray.push(generateEngineerCard(employee));
        } else if (employee.getRole() === "Intern") {
            pageArray.push(generateInternCard(employee));
        }
    }
    );
    return pageArray.join("");
}




module.exports = generatePage;