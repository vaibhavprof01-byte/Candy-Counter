let count=document.getElementById("count-el")
let save=document.getElementById("save-el")

function incrementCount(){
    count += 1
    document.getElementById("number").textContent=count
}

function saveCount(){
    save=count
    count = 0
    document.getElementById("number").textContent=count
    document.getElementById("prev-el").textContent += save + " - "
}