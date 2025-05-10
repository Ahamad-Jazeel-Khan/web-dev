"use server"
import fs from "fs/promises"
import { log } from "console";

export const submitAction = async (e)=>{
    console.log(e.get("name") , e.get("add"))
    let a = fs.writeFile("harry.txt" , `Name is ${e.get("name") }  and address is ${e.get("add")}`)
    console.log(a);
    
  }