function printEquality(a,b){
    console.log(a === b); //厳格
    console.log(a == b); //抽象
}

let a = '1';
let b = 1;

let c = true;
// printEquality(b,c);

let e = "";
let f = 0;
printEquality(e,f); //false true