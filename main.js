const inputField = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

// const addBtn =  document.querySelector(".row button");

function AddTask(){
    if(inputField.value === ''){
        alert("You must have to write somthing !")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    inputField.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()