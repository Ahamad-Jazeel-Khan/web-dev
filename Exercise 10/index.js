console.log("Business name generator")
function adjectives(rand) {
    let a = " crazy "
    let b = " Amazing "
    let c = " fire "

    if (rand === 0) {
        return a;
    }
    else if (rand === 1) {
       return b ; 
    }
    else return c
}

function shop_name(rand) {
    let p = " Engine "
    let q = " foods "
    let r = " garments "

    if (rand === 0) {
        return p;
    }
    else if (rand === 1) {
       return q; 
    }
    else return r;
}

function another_word(rand) {
    let x = " Bros "
    let y = " Limited "
    let z = " Hub "

    if (rand === 0) {
        return x;
    }
    else if (rand === 1) {
       return y ; 
    }
    else return z;

}

const word1 = adjectives(Math.floor(Math.random() * 3));
const word2 = shop_name(Math.floor(Math.random() * 3));
const word3 = another_word(Math.floor(Math.random() * 3));

const generatedName = word1 + "" + word2 + "" + word3;

console.log(generatedName);
