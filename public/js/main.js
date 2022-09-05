const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const editBtn = document.querySelectorAll('.edit')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(editBtn).forEach((el)=>{
    el.addEventListener('click', popupModal)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

function popupModal(){
    // Get the modal
    const modal = document.getElementById("myModal"),
        updateButton = document.getElementById("updateButton"),
        date = document.getElementById("todoDateModal"),
        todoItem = document.getElementById("todoItemModal")
    modal.style.display = "block";
    todoItem.setAttribute("placeholder", this.dataset.todo)
    date.setAttribute("value", this.dataset.date)
    updateButton.setAttribute("data-id", this.dataset.id)
    updateButton.addEventListener('click', update)
    console.log(todoItem.getAttribute('placeholder'))
}
async function update(){

    const todoId = this.dataset.id,
        todoItemElement = document.getElementById("todoItemModal"),
        date = document.getElementById("todoDateModal").value
    let todoItem = todoItemElement.value || todoItemElement.getAttribute('placeholder');
    console.log(date,todoItem,todoId)
    try{
        const response = await fetch('todos/edit', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
                'dateFromJS' : date,
                'todoItemFromJS' : todoItem
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}