let myProjects = [];    
//const todoSample = {title:"test writing!", description:"No description yet!", dueDate:"08/07/2002", priority:"Normal"};

var defaultProject=new Project("My First Project",[{title:"Start writing!", description:"No description yet!", dueDate:"08/07/2002", priority:"Normal"}]);
myProjects.push(defaultProject);

//myProjects[0].todos.push(todoSample)

let index=0;
function Project(projectTitle,todos) {
    if(todos==undefined){
        todos=[];
    }
    this.projectTitle=projectTitle;
    this.todos=todos;
}



function addNewProject(){
    var newProjectName = document.getElementById('name').value;
    document.getElementById("add-project-form").style.display = "none";
    document.getElementById("cover").style.display = "none";
    let newProject=new Project(newProjectName);
    myProjects.push(newProject);
    showProjectList();  
}



function clearProjectList(){
    document.querySelector(".projectlist").innerHTML = "";
}
function showProjectList(){
clearProjectList(); 

let container = document.querySelector('.projectlist');

    for (let x=0;x<myProjects.length;x++){
   
    let newProject = document.createElement('li');
    newProject.classList.add('project-item');

    let projectName = document.createElement('div');
    projectName.classList.add('projectname');
    projectName.textContent=myProjects[x].projectTitle;

    var img = document.createElement('img');
    img.src ="src/remove.svg";
    img.classList.add('remove-project');
    
    newProject.appendChild(projectName);
    newProject.appendChild(img);
    container.appendChild(newProject);

    }
    let projectList=Array.from(document.getElementsByClassName('project-item'));
    
    projectList[index].classList.add('active');
    
    getList(projectList);
   
    showTodo();
    removeProject();
    
}
function showTodo(){
    let e=index;
    console.log("the project "+e)
    let todolist = document.querySelector('.todolist');
    todolist.innerHTML="";
    //console.log(myProjects[e].todos[0].title)
    if((myProjects.length==0)||(myProjects[e].todos===undefined)){
        console.log(myProjects);
       
    }else{
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
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent="Delete Note";
    
            listItem.appendChild(todoTitle);
            listItem.appendChild(todoDueDate);
    
            todoDueDate.appendChild(detailsBtn);
            todoDueDate.appendChild(deleteBtn);
    
            todolist.appendChild(listItem);    
        }
    }
    //foreach
    let viewBtn =Array.from(document.getElementsByClassName('details'));
    viewBtn.forEach(v => v.addEventListener('click', function() {
        let viewIndex=viewBtn.indexOf(v);
        viewDetails(viewIndex);
    }));
    deleteTodo();
}
function getList(projectList){
    
    projectList.forEach(v => v.addEventListener('click', function() {
        index=projectList.indexOf(v);
        for(let i=0;i<projectList.length;i++){
            projectList[i].classList.remove('active');
           
        }
        projectList[index].classList.add('active');
        showTodo();
    }));
    
}
function addTodo(){
    let title=document.getElementById("new-todo-title").value;
    let description=document.getElementById("new-todo-description").value;
    let dueDate=document.getElementById("new-todo-duedate").value;
  
    let priority=document.getElementById("new-todo-priority").value;
    let newTodoObject={title, description, dueDate, priority};
    myProjects[index].todos.push(newTodoObject);

    document.getElementById("add-note").style.display = "none";
    document.getElementById("cover").style.display = "none";
    showTodo();
}
function viewDetails(viewIndex){
    console.log(myProjects[index].todos[viewIndex]);
    document.getElementById("view-todo-details").style.display = "flex";
    document.getElementById("cover").style.display = "block";

    document.getElementById('view-todo-title').textContent=myProjects[index].todos[viewIndex].title;
    document.getElementById('view-todo-description').textContent=myProjects[index].todos[viewIndex].description;
    document.getElementById('view-todo-duedate').textContent="Due Date:"+myProjects[index].todos[viewIndex].dueDate;
    document.getElementById('view-todo-priority').textContent="Priority: "+myProjects[index].todos[viewIndex].priority;

}
function removeProject(){
    let xBtn=Array.from(document.getElementsByClassName('remove-project'));

    xBtn.forEach(v => v.addEventListener('click', function() {
        index=xBtn.indexOf(v);
        
        if(index==myProjects.length-1){
            myProjects.splice(index, 1);
            index=index-1;
        }else{
            myProjects.splice(index, 1);
        }
        showProjectList(); 

    }));
   //index=0;
   
}
function deleteTodo(){
    let delBtn=Array.from(document.getElementsByClassName('deleteBtn'));

    delBtn.forEach(v => v.addEventListener('click', function() {
       let toDelete=delBtn.indexOf(v);
        
        
        myProjects[index].todos.splice(toDelete,1);
        showProjectList(); 

    }));
}
showProjectList(); 

