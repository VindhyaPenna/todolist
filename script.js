
const body = document.getElementById("body");
// console.log(body);


let div = document.createElement("div");
    div.classList.add("notaskdiv")
    body.appendChild(div);
    div.innerText = "No Tasks Yet 🧐";


let taskarr = [];
let val;
taskCollector.addEventListener("input",()=>{
val = taskCollector.value;//collecting the input value
});

const search = document.createElement("div");
search.classList.add("search")

const searchinput = document.createElement("input");
searchinput.placeholder = "🔍search your tasks here";
searchinput.classList.add("searchinput")
searchinput.margin = "auto";
search.appendChild(searchinput)
body.appendChild(search)



const taskcontainer = document.createElement("div");


const add = document.getElementById("addbtn")
add.addEventListener("click",(e)=>{
e.preventDefault();
if(val==""|| val == undefined){
alert("please enter a value")
return}
div.innerText = ""
div.classList.remove("notaskdiv")
const taskCollector = document.getElementById("taskCollector");
// console.log(taskarr);
let priority = document.getElementById("Priority").value;//collecting the dropdown value
let obj = {
   task : val,
   prio : priority,
   hp : (priority=="High priority") 
}
taskarr.push(obj);


createTask(val)

val = ""
taskCollector.value = ""
})


searchinput.addEventListener("input",()=>{
   const searchTerm = searchinput.value.toLowerCase();
   // console.log(searchTerm);
   let filteredTasks = [];
   taskarr.filter((tasks)=>{
      taskcontainer.innerHTML = ""
      if(tasks.task.toLowerCase().includes(searchTerm)){
         filteredTasks.push(tasks)
      }
   })
   addSearchedItems(filteredTasks) 
   if(searchTerm === ""){
      taskcontainer.innerHTML=""
      addSearchedItems(taskarr)
      return
   }
})

let i = 0;
 function addSearchedItems(filteredTasks){
   // console.log(filteredTasks);
      for(let i = 0;i<filteredTasks.length;i++){
         createTask(filteredTasks[i].task);
      }
   }
function createTask(taskname){
   const task = document.createElement("div");
const tasktext = document.createElement("div");
tasktext.innerText = taskname;
tasktext.classList.add("tasktext");
task.classList.add("task")

const btndiv = document.createElement("div")
btndiv.classList.add("btndiv")
const editbtn = document.createElement("button");
editbtn.classList.add("editbtn");
let delbtn =document.createElement("button");
task.appendChild(editbtn);
editbtn.innerHTML = "EDIT"
delbtn.classList.add("delbtn");
// delbtn.classList.add("delbtn"+i++)
delbtn.innerHTML = "DELETE"
btndiv.appendChild(editbtn);
btndiv.appendChild(delbtn);
task.appendChild(tasktext)
task.appendChild(btndiv)
taskcontainer.appendChild(task)
body.appendChild(taskcontainer)
}

// let buttons = document.query 
taskcontainer.addEventListener('click',(e)=>{
   if (e.target.classList.contains('delbtn')) {
      // console.log( e.target.parentElement.parentElement.firstChild.innerText);
      for(let i = 0;i<taskarr.length;i++){
         // console.log(taskarr[i].task);
      if(taskarr[i].task == e.target.parentElement.parentElement.firstChild.innerText){
         taskarr.splice(i,1);
         // console.log(taskarr);
      }}
      e.target.parentElement.parentElement.remove();
   }
   else if (e.target.classList.contains('editbtn')) {
      // console.log(e.target);
      editTask(e.target);
  }
});

function editTask(edittarget){
 taskCollector.value = edittarget.parentElement.parentElement.firstChild.innerText;
 val = edittarget.parentElement.parentElement.firstChild.innerText;
 edittarget.parentElement.parentElement.remove();
//  console.log(taskCollector.value);
}