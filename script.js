let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("Button has been clicked")
    document.querySelector(".box").innerHTML= "<b>Button has been clicked</b>"
    console.log("Operation Running")
})

button.addEventListener("contextmenu", ()=>{
    alert("Doing R&D")
    console.log("Doing R&D")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode)  
})


