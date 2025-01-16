const inputText = document.querySelector('#input-task')
const btnAddTask = document.querySelector('#btn-add-task')
const list = document.querySelector('ul')
let alertMessage = document.querySelector('span')

loadTasks()

inputText.addEventListener('click', ()=>{
    alertMessage.style.display = 'none'
    inputText.style.border = ''
})

btnAddTask.addEventListener('click', ()=>{
    addingTask()
})

function addingTask(){
    if (inputText.value.trim() !== '') {
        
        let liTask = document.createElement('li')

        let nameTask = document.createElement('span')
        nameTask.textContent = inputText.value

        let iconTaskCompleted = document.createElement('img')
        iconTaskCompleted.src = '/imgs/Checked Checkbox.svg'
        iconTaskCompleted.id = 'img-task-completed'
        iconTaskCompleted.addEventListener('click', () =>{
            nameTask.style.color = 'green'
            nameTask.style.textDecoration = 'line-through'
            nameTask.style.cursor = 'pointer'

            updateTaskInStorage(inputText.value, true)
        })

        let iconTaskRemove = document.createElement('img')
        iconTaskRemove.src = '/imgs/Remove.svg'
        iconTaskRemove.id = 'img-task-remove'
        iconTaskRemove.addEventListener('click', ()=>{
            liTask.remove()
            removeTaskFromStorage(inputText.value)
        })

        list.appendChild(liTask)
        liTask.appendChild(nameTask)
        liTask.appendChild(iconTaskCompleted)
        liTask.appendChild(iconTaskRemove)
        inputText.value = ''
        saveTaskToStorage(inputText.value)
    }else{
        inputText.style.border = '1px solid red'
        alertMessage.style.display = 'block'
        alertMessage.textContent = 'Digite uma tarefa'
        alertMessage.style.color = 'red'
        return
    }
}

function saveTaskToStorage(taskName) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        let liTask = document.createElement('li');
        let nameTask = document.createElement('span');
        nameTask.textContent = task.name;

        if (task.completed) {
            nameTask.style.color = 'green';
            nameTask.style.textDecoration = 'line-through';
        }

        let iconTaskCompleted = document.createElement('img');
        iconTaskCompleted.src = '/imgs/Checked Checkbox.svg';
        iconTaskCompleted.id = 'img-task-completed';
        iconTaskCompleted.addEventListener('click', () => {
            nameTask.style.color = 'green';
            nameTask.style.textDecoration = 'line-through';
            updateTaskInStorage(task.name, true);
        });

        let iconTaskRemove = document.createElement('img');
        iconTaskRemove.src = '/imgs/Remove.svg';
        iconTaskRemove.id = 'img-task-remove';
        iconTaskRemove.addEventListener('click', () => {
            liTask.remove();
            removeTaskFromStorage(task.name);
        });

        list.appendChild(liTask);
        liTask.appendChild(nameTask);
        liTask.appendChild(iconTaskCompleted);
        liTask.appendChild(iconTaskRemove);
    });
}

function updateTaskInStorage(taskName, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(task =>
        task.name === taskName ? { ...task, completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function removeTaskFromStorage(taskName) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}