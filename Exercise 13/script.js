console.log("intialising script.js")

function createCard(title , cName , views ,monthsOld , duration , thumbnail) {
    const knum = kFormatter(views);
    let box1 = document.getElementsByClassName('box1')
    box1[0].innerHTML = title

    let box2 = document.getElementsByClassName('box2')
    box2[0].innerHTML = cName
    

    let box3 = document.getElementsByClassName('box3')
    box3[0].innerHTML = knum
    

    let box4 = document.getElementsByClassName('box4')
    box4[0].innerHTML = monthsOld
    

    let box5 = document.getElementsByClassName('box5')
    box5[0].innerHTML = duration
    
    let img = document.getElementsByClassName('img')
    img[0].setAttribute("src", thumbnail)
    


    console.log(knum);
    
    document.querySelector("container").innerHTML = document.querySelector("container").innerHTML +  html
}


createCard("Introduction to Backend | Sigma Web Development course-Tutorial #1", "CodeWithHarry", 2800000,"2 months ago" ,"31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ") 

function kFormatter(num) {
    if(num > 999 && num < 1000000){
        return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K'; 
    }else if(num > 1000000){
        return Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'; 
    }else if(num < 900){
        return num; 
    }
}