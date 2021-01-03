function a(name){
    return 'hello' + name;
}
const b = name => 'hello ' + name; //上記をアロー関数を使用して記述できる
console.log(b('Tom'));

//複数の引数を使いたい場合
const c = (name1, name2) => 'hello ' + name1 + ' ' + name2;
console.log(c('Tom','Bob'));