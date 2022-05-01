let projects = [
    {
        "date": "2022/04/21",
        "title": "Mixed Messages",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "2022/04/23",
        "title": "Snake",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "2022/01/12",
        "title": "Wordle",
        "description": "This project was created using javascript ..."
    },
    {
        "date": "2017/08/19",
        "title": "Cheat Sheet",
        "description": "This project was created using javascript ..."
    }
]

projects.sort(function compare(obj1, obj2){
    return new Date(obj2.date) - new Date(obj1.date)
})
console.log(projects);



for (i = 0; i < 2; i++) {
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


