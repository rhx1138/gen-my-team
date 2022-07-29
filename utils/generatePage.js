
// function that generates markdown for index.html file 
function generatePage(data) {
    return `
    # ${data.title}
    ![alt text](${data.image})
    ${data.description}
    ${data.installation}
    ${data.usage}
    ${data.license}
    ${data.contributing}
    ${data.tests}
    ${data.email}
    ${data.github}
    ${data.username}
    ${data.name}
    ${data.date}
    `;
}




module.exports = generatePage;