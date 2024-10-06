document.addEventListener("DOMContentLoaded", () => { 
});
const newTaskDescription = document.getElementById("new-task-description")
const task = document.getElementById ("task")

function addtask() {
  if (newTaskDescription.value==='') {
    alert("Write something")
  }
  else{
  let li=document.createElement("li")
  li.innerHTML=newTaskDescription.value;
  task.appendChild(li);
  let span = document.createElement("span")
  span.innerHTML="\u00d7";
  li.appendChild(span)
  }
newTaskDescription.value="";
saveData()
}
task.addEventListener("click",functoin(e){
  if (e.target.tagName==="Li") {
    e.target.classLIst.toogle("checked");
    saveData()
  }
  else if(e.target.tagName==="SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
},false);

function saveData() {
  localStorage.setItem("data",task.innerHTML)
}
function showTask() {
  task.innerHTML = localStorage.getItem("data");

}
showTask()

const form=document.getElementsById("myform")
form.addEventListener("submit",(event)=>{
  event.preventdefault();
     const name = document.getElementById("name").value;
     const age = document.getElementById("age").value;
     const duration = document.getElementById("duration").value;

console.log("form submitted",name,age,duration)
})