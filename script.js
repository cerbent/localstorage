const btn = document.querySelector(".add-btn")
const input = document.querySelector(".text-input")
const list = document.querySelector(".list")
const button = document.querySelector(".but")

btn.addEventListener("click",()=>{
    addNewList()
})

input.addEventListener("keydown",(e)=>{
    if (e.key === 'Enter'){
        addNewList()
    }
})

button.addEventListener("keydown",(e)=>{
    if (e.key === 'Delete'){
        addNewList()
    }
})

function addNewList(){
    if (input.value !== ""){
        const  time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        const newList =     `<li class="list-group-item d-flex justify-content-between align-items-center">
<div class="d-flex align-items-center">
<input type="checkbox"class="checkbox mx-2 mt-1">
<p class="pt-3">${input.value}</p>
<p class="times my-3 mx-3">${time}</p>

</div>
<button class=" del-btn btn btn-danger">delete</button>
</li>`
        list.innerHTML += newList
    }
}

list.addEventListener("click",(e)=>{
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("checkbox")){
        e.target.parentNode.classList.toggle('line')
    }
})

// innerHtml - html мн иштеш учун колдонулат
// event.target - click болгон нерсени чыгарып берет
// parentNode - позволяет проверить содержит ли один элемент внутри себя другой эл
// contains - родительский эл кайрылганга жардам берет
// classList.toggle() - ведет себя как classList.remove()


// const classes ={
//     li: "d-flex justify-content-between align-items-center list-group-item",
//     delBtn: "del-btn btn btn-danger",
//     span: "d-flex align-items-center",
// }
//
// function view(){
//     const tasks = JSON.parse(localStorage.getItem("task")) || []
//     let alist = ""
//     tasks.map(el =>{
//         alist += `<li class="${classes.li}">
// <span class="${classes.span}">
// <input type="checkbox" class="mx-1">
// ${el.title}
// </span>
// <p class="mx-3 my-3">${new  Date().getHours()} :${new Date().getMinutes()} :${new Date().getSeconds()}</p>
// <button class="${classes.delBtn}">delete</button>
//
// </li>`
//     })
//     list.innerHTML = alist
//
//     deleteTask()
//
// }
// view()
//
//
//
// btn.addEventListener("click",()=>{
//     let tasks = JSON.parse(localStorage.getItem("task")) || []
//
//     const newTask ={
//         id:tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//         title: input.value,
//         isDone: false
//     }
//     tasks = [...tasks,newTask]
//     localStorage.setItem("task",JSON.stringify(tasks))
//     view()
// })
//
// function deleteTask(){
//     const buttons = document.querySelectorAll(".del-btn")
//     let tasks =    JSON.parse(localStorage.getItem("task")) || []
//
//     buttons.forEach((btn,index)=>{
//         btn.addEventListener("click",()=>{
//             tasks = tasks.filter((el,idx)=>{
//                 return index !== idx
//
//             })
//             localStorage.setItem("task",JSON.stringify(tasks))
//             view()
//         })
//     })
// }
//
// list.addEventListener("click",(e)=>{
//     const tasks = JSON.parse(localStorage.getItem("task")) || []
//     localStorage.setItem(tasks,JSON.stringify())
// })
//
// function checked(){
//     const checkboxes = document.querySelectorAll(".check-box")
//     let tasks =    JSON.parse(localStorage.getItem("task")) || []
// }

// const btn = document.querySelector(".add-btn")
// const input = document.querySelector(".text-input")
// const list = document.querySelector(".list")
//
// const classes = {
//     li: "d-flex justify-content-between align-items-center list-group-item",
//     delBtn: "del-btn btn btn-danger",
//     span: "d-flex align-items-center",
//     checked: "check-box mx-1"
// }
//
//
// function view() {
//     const tasks = JSON.parse(localStorage.getItem("task")) || []
//     let allList = ""
//     tasks.map(el => {
//         allList += `<li class="${classes.li}">
//       <span class="${classes.span} ${el.isDone ? "line" : ""}  ">
//        <input ${el.isDone ? "checked" : ""} type="checkbox" class="${classes.checked}">
//        ${el.title}
// </span>
// <button class="${classes.delBtn}">delete</button>
// </li>`
//
//     })
//     list.innerHTML = allList
//
//     deleteTask()
//     checked()
// }view()
//
//
// btn.addEventListener("click", () => {
//     let tasks = JSON.parse(localStorage.getItem("task")) || []
//
//     const newTask = {
//         id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//         title: input.value,
//         isDone: false
//     }
//     tasks = [...tasks, newTask]
//     localStorage.setItem("task", JSON.stringify(tasks))
//     view()
// })
//
// function deleteTask() {
//     const buttons = document.querySelectorAll(".del-btn")
//     let tasks = JSON.parse(localStorage.getItem("task")) || []
//
//     buttons.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             tasks = tasks.filter((el, idx) => {
//                 return index !== idx
//             })
//             localStorage.setItem("task", JSON.stringify(tasks))
//             view()
//         })
//     })
// }
//
// function checked() {
//     const checkboxes = document.querySelectorAll(".check-box")
//     let tasks = JSON.parse(localStorage.getItem("task")) || []
//
//     checkboxes.forEach((check, index) => {
//         check.addEventListener("click", (e) => {
//             e.target.parentNode.classList.toggle('line')
//             tasks = tasks.map((el, idx) => {
//                 if (index === idx) {
//                     return {...el, isDone: !el.isDone}
//                 } else {
//                     return el
//                 }
//             })
//             localStorage.setItem('task', JSON.stringify(tasks))
//         })
//     })
// }

























