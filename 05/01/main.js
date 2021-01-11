function fn(a, b){
    console.log(a,b);
}
fn(0, 1);
//引数がひとつだけだとaしか渡らない。bはundefinedになる
//bの引数だけ渡したいときは(null,1)などと書く
//同じ関数が重複していた場合は、後からの変数が有効になる

const fn01 = function fn01(a, b){
    console.log(a,b);
}
//重複を避けたい場合はconstを使用して書くのも手

//-------------
//デフォルト値の設定
function fn02(a, b=1){
    //b=1とすることで、引数に何も当たらなくてもデフォルトで1が渡る
    console.log(a, b);
}
fn02(1);　//結果: 1 1
//bがnullの場合はnull, undefinedの場合は1になる
//意図的に変数をからにしたい場合はnull
