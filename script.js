const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputbox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");//create list tag.
        li.innerHTML=inputbox.value;//put some value in its inner html.
        listcontainer.appendChild(li);//add into unordered list container.
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; //adding cross icon with the help of span tag.
        li.appendChild(span);//here we have display span in every list element/item.
    } 
    inputbox.value="";
}