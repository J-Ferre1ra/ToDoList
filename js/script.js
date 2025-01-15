const inputText = document.querySelector('#input-task')
const btnAddTask = document.querySelector('#btn-add-task')
const list = document.querySelector('ul')

btnAddTask.addEventListener('click', ()=>{
    addingTask()
    localStorage()

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
        })

        let iconTaskRemove = document.createElement('img')
        iconTaskRemove.src = '/imgs/Remove.svg'
        iconTaskRemove.id = 'img-task-remove'
        iconTaskRemove.addEventListener('click', ()=>{
            liTask.remove()
        })

        list.appendChild(liTask)
        liTask.appendChild(nameTask)
        liTask.appendChild(iconTaskCompleted)
        liTask.appendChild(iconTaskRemove)
    }
}

