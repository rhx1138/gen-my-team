// function that generates new badges for index.html file
function generatePage(data) {
    console.log(data);
    return generateTeamPage
}; // create team card for index.html file


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
// not recognizing .getRole()

generatePage = data => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole('role');

        if (role === "Manager") {
            const managerCard = generateManagerCard(employee);
            pageArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);
            pageArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateInternCard(employee);
            pageArray.push(internCard);
        }


    }

    const employeeCards = pageArray.join("");
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}


const generateTeamPage = function (employeeCards) {
    return `
<!DOCTYPE html>
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
<div class="row">
<div class="col-md-4">
            <div class="thumbnail">
                <img src="https://avatars3.githubusercontent.com/u/14098981?s=460&v=4" width="50%" alt="...">
                <!--team cards-->
                ${employeeCards}
            </div>
        </div>
    </div>
</div>




</body>
</html>`

}

module.exports = generatePage;