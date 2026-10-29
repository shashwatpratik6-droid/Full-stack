const student= {
    studentName:"shashwat pratik",
    age:20,
    rollNumber:2616400055
}
// student.studentName = "Naman"
// console.log(student)

// student.studentName = "Yash"
// console.log(student)

const fruits = ["mango","guava","litchi","orange"]
// console.log(fruits)

// console.log(fruits[2])
// fruits[5] = "apple"
// console.log(fruits)

fruits.push("banana","apple","grapes","avacado","blueberry","pomgranate")
// console.log(fruits)

// fruits.pop("banana")
// console.log(fruits)

// unshift- adds a new element at the start of the array 
// fruits.unshift("banana")
// console.log(fruits)

// shift- adds a new element at the start of the array 
// fruits.shift("banana")
// console.log(fruits)

// const len = fruits.length;
// console.log(len)

// console.log(fruits[len-1])

// splice
// console.log(fruits)
fruits.splice(2,0,"papaya")
console.log(fruits)
