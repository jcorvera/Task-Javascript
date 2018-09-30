document.getElementById("form-task").addEventListener('submit',function(e){
    let title = document.getElementById('title').value;
    let description =  document.getElementById('description').value;
    const task ={
        title,
        description,
    }
    if(localStorage.getItem('tasks') == null){
        let tasks =[];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    getTasks();
    document.getElementById("form-task").reset();
    e.preventDefault(); 
});
function getTasks(){
    let tasks =  JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('task-view');
    tasksView.innerHTML= '';
    for (let index = 0; index < tasks.length; index++) {
        let title = tasks[index].title;
        let  description = tasks[index].description;

        tasksView.innerHTML += ` <div class="card mb-3">  
            <div class="card-body">
                <p>${title} -  ${description}</p>
                <a class="btn btn-primary" onclick="deleteTask('${title}')">
                    Delete
                </a>
            <div>
        </div> `;
    }
}
function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].title == title) {
            tasks.splice(index,1);   
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    getTasks();
}
getTasks();