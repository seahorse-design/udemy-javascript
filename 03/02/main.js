function a(){
    //この中のスコープを関数スコープ
    let b = 0;
}
//console.log(b); //ここだとエラーがでる.bの値がとれないため
a();

//-----------
//ブロックスコープを使用したい場合、letかconstを使用
{
    let c = 1;
    console.log(c);
}

//-----------
{
    var c1 = 1;
}
console.log(c1);
 //var、関数宣言だと取得できてしまう。ブロックスコーぷを無視してしまう。意図しない挙動につながる