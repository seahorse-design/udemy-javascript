a();

function a(){
    console.log('a is called');
}
//関数の実行前に定義がメモリ上に存在されているから動く

//---------------------

console.log(b); //これだとundifined
var b = 0;

//---------------------

var b = 0;
console.log(b);

//まず変数bのメモリを確保した状態で
//undifinedという特殊な値を設定
//b=0と値が代入された後には、bの値が取得できる

//---------------------

console.log(b);
let b = 0; //この状態だとエラー
//let,constの場合は,undifinedの初期化が行われない
//なのでvarは非推奨


const a = function(){

}
a();
//こんな形でも関数を宣言できる
//関数式