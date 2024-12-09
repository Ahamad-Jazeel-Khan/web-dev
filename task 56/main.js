const fs = require ("fs")
const fs = require ("fs/promises")


console.log("starting")

// fs.writeFileSync("jazeel.txt" , "Harry is a good boy")

fs.writeFile("Jazeel2.txt" , "Harry is a goob boy" , ()=>{
   console.log("done")
   fs.readFile("Jazeel2.txt" ,(error , data)=>{
    console.log(error , data.toString())
   })
})

fs.appendFile("Jazeel2.txt", "harryrorbo",(e,d)=>{
    console.log(d)
})
console.log("ending")