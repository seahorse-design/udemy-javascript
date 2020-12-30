function addNumberFactory(num){ //2. numは5になる
    function addNumber(value){ //3.関数の実行　addnumberが宣言される
        return num + value; //addnumberの返り値　4.ここのnumも5になる
    }
    return addNumber;
}

const add5 = addNumberFactory(5); //1. addNumberFactoryで5という値を渡してる
const result = add5(10);
console.log(result);　//10+5で15が表示される