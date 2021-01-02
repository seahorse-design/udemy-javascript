//typeof 演算子、データ型が確認できる

function printTypeAndValue(val){
    console.log(typeof val, val);
}

let a = 0;
printTypeAndValue(a); //number 0

let b = '1' + a;
//どちらかのデータかたに合わせて変換される。この場合は文字列になる。
printTypeAndValue(b); //string 10

let c = 15 - b;
//マイナスは数値の計算にしか使われないので数値になる
printTypeAndValue(c); //number 5

let d = c - null;
//nullが数値の0に変換される
printTypeAndValue(d); //number 5

let e = d - true;
//trueは数値の計算に使用されると、1に変換される
printTypeAndValue(e); //number 4


let b = perseInt('1') + a; //perseInt…数字に変換される