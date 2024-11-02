let a = prompt("Enter First number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed");
}

function main() {
    
    let x = 1;
    let sum = parseInt(a) + parseInt(b)
    try {
        console.log("the sum is", sum*x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya Bhai")
        return false
    }
    
    finally {
        console.log("Files are being closed and db connection is being closed")
    }
    
}

let c = main()