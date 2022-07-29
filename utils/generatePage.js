
// function that generates markdown for index.html file 
function generatePage(data) {
    return `
    # ${data.title}
    ![alt text](${data.image})
    ${data.name}
    ${data.id}
    ${data.email}
    ${data.github}
    `;
}




module.exports = generatePage;