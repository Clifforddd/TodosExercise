const form = document.querySelector("#add-item");
const input = document.querySelector("#item-name");
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON")
        e.target.parentElement.remove()
    else if (e.target.tagName === "LI")
        e.target.style.textDecoration  = "line-through";
})




form.addEventListener("submit", function(e){
    const newList = document.createElement("li");
    const removeList = document.createElement("button");
 

    e.preventDefault();

    removeList.innerText = "remove";
    newList.innerText = input.value;
    newList.appendChild(removeList);
    todoList.appendChild(newList);
    input.value = "";

    const newArr = [];
    const storeValue = document.querySelector("#todo-list");
    localStorage.setItem("newList", JSON.stringify(function(){

        for(let item of storeValue) {
            newArr[item] = storeValue[item];
        }
        return newArr;        

    }));
})

