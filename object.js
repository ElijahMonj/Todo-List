let myProjects = [];    
const todoSample = {title:"test writing!", description:"No description yet!", dueDate:"08/07/2002", priority:"Normal"};

var defaultProject=new Project("My First Project",[{title:"Start writing!", description:"No description yet!", dueDate:"08/07/2002", priority:"Normal"}]);
myProjects.push(defaultProject);

myProjects[0].todos.push(todoSample)


function Project(projectTitle,todos) {
    if(todos==null){
        todo=[];
    }
    this.projectTitle=projectTitle;
    this.todos=todos;
}



function addNewProject(){
    var newProjectName = document.getElementById('name').getAttribute('value');
    document.getElementById("add-project-form").style.display = "none";
    document.getElementById("cover").style.display = "none";
    let newProject=new Project(newProjectName);
    myProjects.push(newProject);
    showProjectList();  
}

showProjectList(); 

function clearProjectList(){
    document.querySelector(".projectlist").innerHTML = "";
}
function showProjectList(){
clearProjectList(); 

let container = document.querySelector('.projectlist');

for (let x=0;x<myProjects.length;x++){
   
    let newProject = document.createElement('li');
    //newProject.classList.add('active');

    let projectName = document.createElement('div');
    projectName.classList.add('projectname');
    projectName.textContent=myProjects[x].projectTitle;

    var img = document.createElement('img');
    img.src ="src/remove.svg";
    
    newProject.appendChild(projectName);
    newProject.appendChild(img);
    container.appendChild(newProject);
}
}
function showTodo(){
    let e=0;//xd
    
    let todolist = document.querySelector('.todolist');
    todolist.innerHTML="";
    console.log(myProjects[e].todos[0].title)
    for(let i=0;i<myProjects[e].todos.length;i++){
        let listItem = document.createElement('div');
        listItem.classList.add('list-item');

        let todoTitle=document.createElement('div');
        todoTitle.classList.add('todo-title');
        todoTitle.textContent=myProjects[e].todos[i].title;
        
        let todoDueDate=document.createElement('div');
        todoDueDate.classList.add('duedate');
        todoDueDate.textContent=myProjects[e].todos[i].dueDate;

        let detailsBtn=document.createElement('button');
        detailsBtn.classList.add('details');
        detailsBtn.textContent="View Note";

        let deleteBtn=document.createElement('button');
        deleteBtn.classList.add('details');
        deleteBtn.textContent="Delete Note";

        listItem.appendChild(todoTitle);
        listItem.appendChild(todoDueDate);

        todoDueDate.appendChild(detailsBtn);
        todoDueDate.appendChild(deleteBtn);

        todolist.appendChild(listItem);
        //console.log(i);
    }
}

