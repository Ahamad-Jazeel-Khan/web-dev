import fs  from "fs/promises"

let a = await fs.readFile("Jazeel.txt")

let b = await fs.appendFile("Jazeel.txt" , "\n\n\n\n\n\n\nthis is amazing promise " )
console.log(a.toString() , b)