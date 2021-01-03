function hello(name){
    // if(!name){ //値が渡ってこなかった場合の初期値を指定
    //     name = 'Tom';
    // }
    name = name || 'Tom'; //上記の簡略化
    console.log('Hello ' + name);
}
hello('');

let name = 'Bob';

// if(name){ //nameがBobだった時に出力される
//     hello(name);
// }
name && hello(name); //上記の簡略化