function a(){
    console.log('called');
}
a();

let c = (function(){
    let privateVal = 0;
    let publicVal = 10;
    
    function prvateFun(){
        console.log('privatefn is called')
    }
    function publicFn(){
        console.log('privateFn is called')
    }
    return {
        publicVal,
        publicFn
    }
})()
//関数の中でしか使えない変数。外で使う変数の区別か
c.publicFn(); //この書き方で外から呼ぶようにできる

let b = function(){
    console.log('called');
}();