const addbtn = document.getElementById("addbtn");
let arr=[];
const input = document.getElementById("input-task");
// console.log(search);
let Hpbtn = document.getElementById("Hp");
let Mpbtn = document.getElementById("Mp");
let Lpbtn = document.getElementById("Lp");
// console.log(Hpbtn,Lpbtn,Mpbtn);
const hprad = document.getElementById("hp");
const mprad = document.getElementById("mp");
const lprad = document.getElementById("lp");
// console.log(hprad,mprad,lprad);
const notask = document.getElementById("no-task-block");
// console.log(notask);


 

let temp = {};
let val = "",i=0 ;
input.addEventListener("input",()=>{
        val = input.value;  
    })
let totaltasks = 0;   
addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    //functions that should
    //occur soon after clicking
    // on add btn
    if(!(Mpbtn.classList.contains("highlight")||Hpbtn.classList.contains("highlight")||Lpbtn.classList.contains("highlight")))
    alert("Please select the priority")
    totaltasks++;
    arr[i].name = val;
    console.log(arr);
    input.value = "";
    notask.classList.add("no-task-block")
    //to remove the highlights of 
    Mpbtn.classList.remove("highlight")
    Hpbtn.classList.remove("highlight")
    Lpbtn.classList.remove("highlight")


    const main = document.getElementById("main");
    const taskblock = document.createElement("div");
    const btn = document.createElement("button");
    const text = document.createElement("div")
    // del
    
    // taskblock.innerText = arr[i].name
    taskblock.classList.add("taskblock")
    main.appendChild(taskblock);
    taskblock.appendChild(text)
    text.innerText = arr[i].name;
    text.style.backgroundColor="transparent"
    text.classList.add("tasktext")
    taskblock.appendChild(btn);
    btn.innerHTML = "delete";
    console.log(main);
    i++;
})




// console.log(temp.name);
let priority = document.getElementsByName("priority");
    let prival = ""
    
    Hpbtn.addEventListener("click",(e)=>{
        if(input.value == "")
        alert("enter a task")
        else
        e.target.classList.add('highlight');
        hprad.checked = "true";
        prival = "hp";
        checkPri();

        Mpbtn.classList.remove("highlight")
        Lpbtn.classList.remove("highlight")
    })
    
    
    Mpbtn.addEventListener("click",(e)=>{
       
        if(input.value == ""){
        alert("enter a task")
       }
       else{
         e.target.classList.add("highlight");
       }
        mprad.checked = "true";
        prival="mp";
        checkPri();
        
        Hpbtn.classList.remove("highlight")
        Lpbtn.classList.remove("highlight")
        // console.log("mpchecked");
    })
    
    
    Lpbtn.addEventListener("click",(e)=>{
        if(input.value == "")
        alert("enter a task")
        else
        e.target.classList.add("highlight");
        lprad.checked = "true";
        prival= "lp";
        checkPri();
        
        // console.log("lpchecked");
        Mpbtn.classList.remove("highlight")
        Hpbtn.classList.remove("highlight")
    })
     
    
    
    let pval = "";
   function checkPri(){
   
    if(prival=="hp")
    pval = "hp";

    else if(prival == "mp")
    pval = "mp";
    else if(prival == "lp")
    pval = "lp";

    temp.pri = pval;
    let str = JSON.stringify(temp);
    let fval = JSON.parse(str);
    arr[i] = fval;
    // let str = JSON.stringify(arr[i]);
    // let fval = JSON.parse(str);
    // arr[i].pri = pval;
    // i++;
   
   }
    
    
    // console.log(temp);
    // arr[i++] = temp;
    // console.log(arr);