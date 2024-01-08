let cantlog = document.getElementById("cantlog")
cantlog.style.display = "none"
item1.onclick = function () {
    cantlog.style.display = "block"
    forgPass.style.display = "none"
    forguname.style.display = "none"
    contact.style.display = "none"
    other.style.display = "none"
 }


 let forgPass = document.getElementById("forgPass")
 forgPass.style.display = "none"
item2.onclick = function () {
    forgPass.style.display = "block"
    cantlog.style.display = "none"
    forguname.style.display = "none"
    contact.style.display = "none"
    other.style.display = "none"
}
 let forguname = document.getElementById("forguname")
 forguname.style.display = "none"
item3.onclick = function () {
    forguname.style.display = "block"
    forgPass.style.display = "none"
    cantlog.style.display = "none"
    contact.style.display = "none"
    other.style.display = "none"
}

let contact = document.getElementById("contact")
contact.style.display = "none"
item4.onclick = function () {
    contact.style.display = "block"
    forguname.style.display = "none"
    forgPass.style.display = "none"
    cantlog.style.display = "none"
    other.style.display = "none"

}

let other = document.getElementById("other")
other.style.display = "none"
item5.onclick = function(){
    other.style.display = "block"
    contact.style.display = "none"
    forguname.style.display = "none"
    forgPass.style.display = "none"
    cantlog.style.display = "none"
}
