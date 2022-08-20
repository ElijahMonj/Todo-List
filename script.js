function showAddProject(){
    document.getElementById("add-project-form").style.display = "flex";
    document.getElementById("cover").style.display = "block";
}
function hideAddProject(){
    document.getElementById("add-project-form").style.display = "none";
    document.getElementById("cover").style.display = "none";
}
function showAddNote(){
    document.getElementById("add-note").style.display = "flex";
    document.getElementById("cover").style.display = "block";
}
function hideAddNote(){
    document.getElementById("add-note").style.display = "none";
    document.getElementById("cover").style.display = "none";
}
function closeNote(){
    document.getElementById("view-todo-details").style.display = "none";
    document.getElementById("cover").style.display = "none";
}
document.getElementById('new-todo-duedate').valueAsDate = new Date();