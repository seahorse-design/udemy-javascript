function hello(name){
    console.log('hello' + name);
}

function bye(){
    console.log('bye');
}

//helloを渡す先の関数を設定
function fn(cb){
    cb('Tom'); //ここで実行される
}

fn(hello); //fnにhelloが渡るので↑
fn(bye);
//