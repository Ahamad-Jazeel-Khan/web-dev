// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function double(arr) {
    if (arr.length === 0) {  
        return arr;
    }
    
    let result = [arr[0] * 2]; 
    
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] === arr[i - 1]) {
            result.push(arr[i]); 
        } else {
            result.push(arr[i] * 2);  
        }
    }
    
    return result; 
}

console.log(double([2, 3, 3, 4 ])); 
