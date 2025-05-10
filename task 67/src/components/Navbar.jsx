import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    // Case 1: Run on ever render
    useEffect(() => {
        alert("Hey I will run on every render")
       },)
       
       // Case 2: Run only on Firts render
       useEffect(() => {
         alert("Hey welcome to my page. This is first render")
        }, [])
     
        // Case 3: Run only when certain value change
        useEffect(() => {
         alert("Hey i am running because color was change")
        }, [color])
    
  return (
    <div>
      I am Navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
