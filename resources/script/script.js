let projects = [
    {
        "date": "24/04/22",
        "title": "Mixed Messages",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "23/04/22",
        "title": "Snake",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "25/04/22",
        "title": "Wordle",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "24/02/22",
        "title": "Cheat Sheet",
        "description": "This project was created using javascript ..."
    }
]

for (i = 0; i < 3; i++) {
    let project = document.createElement('div');
    project.className = "project";
    let projectHeader = document.createElement('h4');
    let projectDate = document.createElement('h6');
    let projectDescript = document.createElement('p');
    let projectLineBreak = document.createElement('hr');
    projectDate.innerHTML = projects[i].date;
    projectHeader.innerHTML = projects[i].title;
    projectDescript.innerHTML = projects[i].description;
    project.appendChild(projectHeader);
    project.appendChild(projectDate);
    project.appendChild(projectDescript);
    document.getElementById('projects').appendChild(project);
    document.getElementById('projects').appendChild(projectLineBreak);
}


