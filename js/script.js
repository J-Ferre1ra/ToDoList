const inputText = document.querySelector('#input-task').value.trim()
const btnAddTask = document.querySelector('#btn-add-task')
const list = document.querySelector('ul')

btnAddTask.addEventListener('click', ()=>{
    addingTask()


})
function addingTask(){
    if (!inputText) {
        
        let liTask = document.createElement('li')

        let iconTaskCompleted = document.createElement('img')
        iconTaskCompleted.src = '/imgs/Checked Checkbox.svg'

        let iconTaskRemove = document.createElement('img')
        iconTaskRemove.src = '/imgs/Remove.svg'
    }
}