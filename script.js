const inputBox=document.getElementById("input_box");
const listContainer=document.getElementById("container");
function addtask(){
    if(inputBox.value=== '') {
        alert("enter something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
    listContainer.addEventListener("click", function(e) {
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);
    function saveData(){
        localStorage.setItem("data", container.innerHTML);
    }
    function showTasks(){
      listContainer.innerHTML=localStorage.getItem("data");

    }
    showTasks();
