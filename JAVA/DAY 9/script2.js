let box = document.querySelector('#box')
let color = "blue"
box.addEventListener("click",() => {
    if (color==="blue"){
    box.style.backgroundColor="red"
    color="red"
}
    else{
    box.style.backgroundColor="blue"
    color="blue"
    }
})