var menu=document.querySelector("menu-icon")
var side=document.querySelector(".sidebar")
var container=document.querySelector(".container")

function show(){
    side.classList.toggle("active")
    container.classList.toggle("large-container")    
}