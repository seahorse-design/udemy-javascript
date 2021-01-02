// let a = 0;
// let a = 0;

// let c = 0;
// c = 1; //再代入

{
    let e = 0; //ブロックスコープ内で可能
    var f = 0;
}

console.log(g); //エラー
console.log(h); //undefined
let g = 0;
var h = 0;