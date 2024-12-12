
//Global variables
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
let inputBox = document.createElement("p");
let notesContainerNote = notesContainer.innerHTML;

//Creating Notes
createBtn.addEventListener('click' ,()=>{
let inputBox = document.createElement("p");
let img = document.createElement("img");
inputBox.className ="input-box";
inputBox.setAttribute("contenteditable" ,"true");
img.src ="images/delete.png";
notesContainer.appendChild(inputBox).appendChild(img);
})  

  //storing input field value/text in localStorage
    function updatestorage(){
    localStorage.setItem('notes' ,notesContainerNote);
  } 

   //Displays Notes stored in locaStorage
   function ShowNotes(){
    notesContainerNote = localStorage.getItem("notes");
   }

   ShowNotes();

  
//remove Notes
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    } 


    //updates locaStorage if users types any other thing
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup =function(){
                updatestorage(); 
            }
        });
    }
  

})






/*
function CreateNote(){
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className ="input-box";
        inputBox.setAttribute("contenteditable" ,"true");
        img.src ="images/delete.png";
        notesContainer.appendChild(inputBox).appendChild(img);  

        notesContainer.addEventListener("click",function(e){
            if(e.target.tagName === "IMG"){
                e.target.parentElement.remove();
            }
        })
}
*/
