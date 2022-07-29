// function that generates new badges for index.html file
function generateBadges(data) {
    return `<div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.title}</p>
                <p class="card-text">${data.id}</p>
                <p class="card-text">${data.email}</p>
                <p class="card-text">${data.github}</p>
                        
            </div>
        </div>
    </div>`;
}

function generatePage(data) {
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
                    <div class="caption">
                        <!-- add blue background color to the name and job title -->
                        <h3>${data.name}</h3>
                        <p>
                            <strong>Job Title:  ${data.title}</strong>
                            <br>
                            <strong>ID: ${data.id}</strong>
                            <br>

                            <em>
                                <a href="https://github.com/${data.github}">
                                ${data.name}'s GitHub Profile
                                </a>
                            </em>
                        </p>
                        <p>
                            <strong>Email:  ${data.email}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>




    </body>
    </html>
    ![alt text](${data.image})
    `;
}

module.exports = generatePage;