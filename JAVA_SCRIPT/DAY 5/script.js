// console.log(Math.round(35.76464));
// console.log(Math.ceil(35.76464));
// console.log(Math.floor(35.76464));
// // for-loop
// for(let i=0;i<=2;i++){
//     console.log("Naman Gandmara hai")
//     console.log("Naman Bhadwa hai")
//     console.log("Naman chutiya hai")
//     console.log("Naman Gand marwata hai")
//     console.log("And band ka tola Naman behen ka loda")
//     console.log("Neem ka patta kadwa Naman sala bhadwa hai")
// }

// function greetNaman(p){
//     for(let i=0;i<=2;i++){
//     console.log(`${p} Gandmara hai`)
//     console.log(`${p} Bhadwa hai`)
//     console.log(`${p} chutiya hai`)
//     console.log(`${p} Gand marwata hai`)
//     console.log(`And band ka tola ${p} behen ka loda`)
//     console.log(`Neem ka patta kadwa ${p} sala bhadwa hai`)
// }
// }

// greetNaman("Naman")
// greetNaman("Yash")


// function sum(x,y){
//     add = x+y;
//     return add;
// }
//  let g = sum(7,8)
//  console.log("Sum:",g)

function sumArray(arr){ 
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
let s=sumArray([2,4,5,3,2,4,6])
console.log(s)
