let obj = {
//  キー情報: 値
    prop1: 'value1',
    prop2: 'value2',
    prop3: function(){ //()の中に何も入っていないもの=無名関数　オブジェクトの中に入るものは無名
        console.log('value3');
    },
     //オブジェクトのプロパティに格納された関数＝メソッド
    prop4: {
        prop5: 'value5'
    }
}

obj.prop3(); //関数を実行する時は()を末尾
console.log(obj.prop4.prop5); //中にあるをオブジェクト呼び出す際にには、.でつなげる