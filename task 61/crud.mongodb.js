
//CRUD operation

//CREATE
use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//         name: "Harry's Web Dev Free Course",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "Harry's Advanced Web Dev Course",
//         price: 100,
//         assignments: 20,
//         projects: 10
//     },
//     {
//         name: "Harry's JavaScript Bootcamp",
//         price: 50,
//         assignments: 15,
//         projects: 25
//     },
//     {
//         name: "Harry's Python for Beginners",
//         price: 30,
//         assignments: 10,
//         projects: 20
//     },
//     {
//         name: "Harry's Full Stack Masterclass",
//         price: 150,
//         assignments: 25,
//         projects: 35
//     },
//     {
//         name: "Harry's Data Science Course",
//         price: 200,
//         assignments: 18,
//         projects: 15
//     },
//     {
//         name: "Harry's Machine Learning Workshop",
//         price: 300,
//         assignments: 8,
//         projects: 12
//     },
//     {
//         name: "Harry's UI/UX Design Course",
//         price: 70,
//         assignments: 5,
//         projects: 10
//     },
//     {
//         name: "Harry's Cloud Computing Basics",
//         price: 120,
//         assignments: 9,
//         projects: 18
//     },
//     {
//         name: "Harry's DevOps Mastery",
//         price: 250,
//         assignments: 22,
//         projects: 40
//     }
// ])


//READ

// let a = db.courses.find({price: 0})

// console.log(a.toArray())  

// let b = db.courses.findOne({price: 0})

// console.log(b)  

//UPDATE

// db.courses.updateOne({price: 0 } ,
//     {$set:{price: 100}})

// db.courses.updateMany({price: 0 } ,
//     {$set:{price: 1000}})

//DELETE

db.courses.deleteOne({price: 1000})

db.courses.deleteMany({price: 200})