function a(){
    console.log('hello');
}

//オブジェクトであることを証明する
a.prop = 0;
a.method = function(){
    console.log('method');
}

a(); //関数オブジェクト
a.method();
console.log(a.prop);