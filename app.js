const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Please! Write Something");
    }else{
        let li=document.createElement("li"); //creating li element
        li.innerHTML=inputBox.value; //adding text inside the li
        listContainer.appendChild(li); //displaying under li
        

        //now adding 1 cross sign to delete an task using span tag
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();

}

listContainer.addEventListener("click", function(e){ 
    if(e.target.tagName==="LI"){ //checks for li and if it is checked makes unchecked and vice-versa
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){ //checks for span element means delete the task
        e.target.parentElement.remove();
        savedata();
    }
}, false);


function savedata(){ // used to save the data using local storage
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){  //used to show data
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();