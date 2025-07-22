


let counter = 0;
const tasklist = document.getElementById("tasks");
const input = document.querySelector("input");
tasklist.addEventListener("click", (e) => handleDelete(e), false);

const handleDelete = (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveTask();
    }
};


const handleAddTask = () => {
    const taskValue = input.value.trim();
    if (taskValue) {
        const currentId = `task-${counter}`;  
        const li = document.createElement("li");
        li.setAttribute("id", currentId);
        li.textContent = taskValue + " ";

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        // delBtn.addEventListener("click", () => handleDelete(currentId)); 

        li.appendChild(delBtn);
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.width = "50vw"; 
        
        tasklist.appendChild(li);

        input.value = "";
        counter++;
    }
    saveTask();
     
};


document.getElementById("add-task").addEventListener("click", handleAddTask);

const saveTask = () =>{
    localStorage.setItem("allToDoTasks", tasklist.innerHTML);
}

const showTask = () =>{
    tasklist.innerHTML = localStorage.getItem("allToDoTasks");
}
showTask();