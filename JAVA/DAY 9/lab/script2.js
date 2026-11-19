// // let box = document.querySelector('#box')
// // let color = "blue"
// // box.addEventListener("click",() => {
// //     if (color==="blue"){
// //     box.style.backgroundColor="red"
// //     color="red"
// // }
// //     else{
// //     box.style.backgroundColor="blue"
// //     color="blue"
// //     }
// // })

// const post = [{
//     id:1,
//     author:"ABC",
//     postUrl:"https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
//     caption: "cool cat"
// },{
//     id:2,
//     author:"ABC",
//     postUrl:"https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
//     caption: "cool cat"
// },{
//     id:3,
//     author:"ABC",
//     postUrl:"https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
//     caption: "cool cat"
// }];
// let i = 0
// while(i<post.length){
//     const newDiv = document.createElement("div");
//     newDiv.className="card";
//     newDiv.innerHTML=`
//     <h4>${post[i].author}</h4>
//     <img src= ${post[i].postUrl}/>
//     <p>${post[i].caption}`


//     const parent = document.getElementById("root");
//     parent.appendChild(newDiv);
//     i++;
// }

// function calculation(arr){
//     let i = 0
//     let max = arr[0];
//     while(i<arr.length){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//         i++
//     }
//     return max
// }


// Set time out function

