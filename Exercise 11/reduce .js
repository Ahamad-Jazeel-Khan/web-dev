let a = [6,5,4,3,2,1]

console.log(a)
const greaterthanseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(a.filter(greaterthanseven))
const red = (a,b)=>{
    return a*b
}

console.log(a.reduce(red))
