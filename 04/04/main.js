// let a = NaN; //not a number 計算結果が数値として期待されるが計算できなかった場合の数字
let a = parseInt("");
console.log(Boolean(a));

//変数が設定されているか確認する時に使う
if(a){
    console.log('helo');
} else {
    console.log('bye');
}