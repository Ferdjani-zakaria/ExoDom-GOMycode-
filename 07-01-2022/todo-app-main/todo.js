// Add to do list
const input = document.querySelector("#input");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");
const deletBtn = document.querySelectorAll(".delete-item");
const all = document.querySelector(".mid");
const active = document.querySelector(".active");
const complite = document.querySelector(".complete");
let count = 0;


// delete to do
const deleteToDo = (e) => {
    count--;
    document.querySelector(".count").innerText =  count + " items left";
    console.log(e.target); 
    e.target.parentElement.remove();
}

// complete task 
// const completeTask = (e) => {
//     e.target.parentElement.classList.toggle("completed");
// }
const addToDo = () => {
    if (input.value.length > 0) {
        count++
        document.querySelector(".count").innerText =  count + " items left";
        const li = document.createElement("li");
        const left = document.createElement("div");
        left.className = "left";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "todo-checkbox";
        checkbox.addEventListener("click", (e) => {
            if (checkbox.checked) {
                e.target.parentElement.parentElement.classList.toggle("completed");
            }
        });
            
        const span = document.createElement("span");
        span.innerText = input.value;
        const del = document.createElement("span");
        del.innerText = "╳";
        del.className = "delete-item";
        del.addEventListener("click", deleteToDo);
        left.appendChild(checkbox);
        left.appendChild(span);
        li.appendChild(left);
        li.appendChild(del);
        ul.appendChild(li);
        input.value = "";
       }
       else{
             alert("Please enter a task");
       }
};

add.addEventListener("click", () => {
    addToDo();
 
});
// add to do while pressing keyup
input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        addToDo();
    }
});


all.addEventListener("click",()=>{
    let a = document.querySelectorAll("li");
    for (i=0;i<a.length;i++){
        if(a[i].checked == false){
            a[i].classList.toggle("show");
            

        }
    }
})

active.addEventListener("click",()=>{
    let a = document.querySelectorAll("li");
    for (i=0;i<a.length;i++){
        if(a[i].checked == false){
            a[i].classList.toggle("show");

        }
        else if(a[i].checked == true){
            a[i].classList.toggle("hide");
        }
    }
})

complite.addEventListener("click",()=>{
    let a = document.querySelectorAll("li");
    for (i=0;i<a.length;i++){
        if(a[i].checked == true){
            a[i].classList.toggle("show");
        }
        else if(a[i].checked == false){
            a[i].classList.toggle("hide");
        }
    }
})