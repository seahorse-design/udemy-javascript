//incrementが呼ばれる度にカウントアップしたい

let num = 0; //ここで初期化を行ってから関数の定義をする

increment();
increment();
increment();

function increment(){
    // let num = 0;　ここだと関数の度にリセットされる
    num = num + 1;
    console.log(num);
}

num = 0; //ここで再度定義されてしまうと
increment(); //出力が1にリセットされてしまう
//これを解決するのにクロージャーを使用する


//---------------------------


function incrementFactory(){
    let num = 0;
    function increment(){
        num = num + 1;
        console.log(num);
    }
    return increment; //関数を返却する
}

const increment = incrementFactory();

increment(); //出力が1にリセットされてしまう