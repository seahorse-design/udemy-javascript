let a = 'hello';
let b = a;
b = 'bye';
console.log(a,b);

let c = {
    prop: 'hello'
}
let d = c;
d.prop = 'bye'; //片方変えてしまうと両方変わってしまう
console.log(c,d);