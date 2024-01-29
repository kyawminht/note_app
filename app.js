const createBtn=document.querySelector(".btn");
const noteContainer=document.querySelector(".note-container");
let note=document.querySelectorAll("input-box");


createBtn.addEventListener('click',(event)=>{
   let inputBox=document.createElement("p");
   let img=document.createElement("img");
   img.src="./img/delete.png";
   img.className="delete";
   inputBox.className='input-box';
   inputBox.setAttribute("contenteditable","true");
   noteContainer.appendChild(inputBox).appendChild(img);
})


noteContainer.addEventListener('click',(event)=>{
    if (event.target.tagName === "IMG"){
       event.target.parentElement.remove()
       store();
    }else if (event.target.tagName === "P" ){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=()=>{
                store();
            }
        })
    }
})

//store into localstroerage
const store=()=>{
    localStorage.setItem("notes",noteContainer.innerHTML);
}

//show notes
const showNote=()=>{
    noteContainer.innerHTML= localStorage.getItem("notes");
}

showNote();

document.addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})