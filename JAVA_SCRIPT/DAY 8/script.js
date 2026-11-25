let body = document.querySelector("body")
let btn = document.querySelector("#btn")
let box = document.querySelector("#box")
let currentMode = "light"
body.addEventListener("click",() => {
    if (currentMode=="light"){
        currentMode = "dark";
        body.style.backgroundColor="black";
        btn.style.backgroundColor="red";
        box.style.color="white";
    }
    else{
        currentMode = "light";
        body.style.backgroundColor="white";  
        btn.style.backgroundColor="blue" 
        box.style.color="black";  
    }
})


let x = document.querySelector('.special')
x.innerText = "School Bag"
