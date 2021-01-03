const a = 0;
const b = 1;
const c = 3;
const d = 0;

console.log(a && b);
//aがｔｒｕｔhｙなので、bの値を返すようになる
//falsyな場合はその値を結果として返す。無かったら、最後の条件を結果として返す

console.log(a || b);
//aがfalseの場合はbの値を取りに行く

console.log((a || b) && c);
console.log((a || b) && (c || d));