console.log("Hello I am conditional tutorial");


let age = 1;
// let grace = 2;

// lat age += grace ;

// console.log(age);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace);
// console.log(age%grace);

/*
i am a
multiline
comment
*/


if (age == 18) {
    console.log("you can drive");
}

else if(age == 0) {
    console.log("are you kidding?")
}
else if(age == 1) {
    console.log("are you again kidding?")
}

else {
    console.log("you cannot drive");

}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/