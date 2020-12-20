//グローバルコンテキスト
let a = 0;　//外部変数：変数の外で定義されたもの
function b() {
    //ここが関数コンテキスト
    console.log(this, arguments,ａ) //これに加え外部変数を使用できる。superは使えない
}

console.log(a);
b();