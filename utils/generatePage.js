// function that generates new badges for index.html file
function generatePage(data) {
    console.log(data);
    return generateTeamPage
}; // create team card for index.html file


// create manager card for index.html file
const generateManagerCard = (manager) => {
    return `
    
    
    <div class="col-md-4">
                <div class="thumbnail">
                    <img src="/assets/images/manager.png" width="50%" alt="...">
                    <div class="caption">
                        <!-- add blue background color to the name and job title -->
                        <h3 style="background-color: rgb(183, 235, 252);"><strong>${manager.getName()}</strong></h3>
                        <p>
                            <strong>Job Title: MANAGER</strong>
                            <br>
                            <strong>ID: ${manager.getId()}</strong>
                            <br>
                            <strong>Email:  ${manager.getEmail()}</strong>
                            <br>
                            <strong> Office Number: ${manager.getOfficeNumber()}</strong>
                        </p>
                    </div>
                </div>
            </div>
        
    `;
}

// create engineer card for index.html file
const generateEngineerCard = (engineer) => {
    return `
    
    <div class="col-md-4">
                <div class="thumbnail">
                    <img src="/assets/images/engineer.png" width="50%" alt="...">
                    <div class="caption">
                        <!-- add blue background color to the name and job title -->
                        <h3 style="background-color: rgb(250, 250, 148);"><strong>${engineer.getName()}</strong></h3>
                        <p>
                            <strong>Job Title: ENGINEER</strong>
                            <br>
                            <strong>ID: ${engineer.getId()}</strong>
                            <br>
                            <strong>Email:  ${engineer.getEmail()}</strong>
                            <br>
                            <strong><a href="https://github.com/${engineer.getGithub()}">
                            ${engineer.getName()}'s GitHub Profile
                            </a></strong>
                        </p>
                    </div>
                </div>
            </div>
        
    `;
}

// create intern card for index.html file
const generateInternCard = (intern) => {
    return `
  
    
    <div class="col-md-4">
                <div class="thumbnail">
                    <img src="/assets/images/intern.png" width="50%" alt="...">
                    <div class="caption">
                        <!-- add blue background color to the name and job title -->
                        <h3 style="background-color: rgb(163, 235, 231);"><strong>${intern.getName()}</strong></h3>
                        <p>
                            <strong>Job Title: INTERN</strong>
                            <br>
                            <strong>ID: ${intern.getId()}</strong>
                            <br>
                            <strong>Email:  ${intern.getEmail()}</strong>
                            <br>
                            <strong>School: ${intern.getSchool()}</strong>
                        </p>
                           
                    </div>
                </div>
            </div>     
    `;
}

// push data from index to html file
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
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
</head>
<body>
<!-- title header is centered with red background color at the top -->
<div class="row" style="background-color: rgb(230, 65, 65) ;">
    <div class="col-md-12">
        <h1 class="text-center" style="color: white ; font-family: 'Anton', sans-serif;">Gen My Team</h1>
    </div>
</div>
<!--team cards-->
<div class="row">
${employeeCards}
</div>

</body>
</html>`

}

module.exports = generatePage;