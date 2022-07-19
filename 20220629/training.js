/* // - var let const の違いを見てもらう
// - 関数の扱い

if (true) {
  var test = "hello world";

  let test2 = "aaaa";
  const test3 = "shit";
}

console.log(test);
// console.log(test2); //エラー
// console.log(test3); //エラー

//   - return 文の使い方。返り値とはなんぞやを理解する

const testFunction = (a, b) => {
  return a + b;
};

//   - if を用いた早期 return
//   - 関数を引数に渡す、という考え方を理解する

const doFunction = (a) => {
  return a + 1;
};

console.log(doFunction(testFunction(10, 9)));

//   - 関数を return するという概念を理解する

const aui = (number) => {
  console.log(number + 1);
  if (number < 10) {
    return aui(number + 1);
  } else {
    console.log("おわり");
  }
};
aui(1);

//   - 【練習問題】数値を引数として与えると、その数だけフィボナッチ数列（1,1,2,3,5,8,13,21,34,55...）を表示するプログラムを作成する

// 講義用練習問題

// 1. 数値2つを入力として受け取り、それらの和をreturnする関数calcTwoNumbersSumを定義せよ。

// 2. 1.で定義したcalcTwoNumbersSumに4と5を与えて実行し、返り値をresultという変数に格納せよ

// 3. console.log(result) と console.log( calcTwoNumbersSum(4,5) ) の結果を比較せよ。

// 4. [1,1,2,3,5,8,13,21,34,55,89...]と続く、フィボナッチ数列という数列がある。
// fib(4) → 3を返す
// fib(5) → 5を返す
// fib(7) → 13を返す
// のように、"引数nを与えることで、n番目のフィボナッチ数を返す関数fib"を定義せよ。

// ただし、n番目のフィボナッチ数は、n-1番目のフィボナッチ数とn-2番目のフィボナッチ数の和であることを利用せよ。
// n番目のフィボナッチ数 fib(n)
// n-1番目のフィボナッチ数 fib(n-1)
// n-2番目のフィボナッチ数 fib(n-2)

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

// オブジェクトの中にプロパティ付きで関数を持たせる例
const message = "sukidayo";
const testObj = {
  aaa: fib,
  quest: message,
};
console.log(testObj.quest);
console.log(testObj.aaa(10));
 */
//==========================================================================================
// 以下予習用ワーク

// - 配列[0,1,2,3,4]を好きな変数名に格納し、3 番目の値を console.log で表示せよ
const count = [0, 1, 2, 3, 4];
console.log(count[2]);
// - 以下の要件を満たす、ひとつの数値を引数として受け取る関数`fn`(ただし、n は番号を示す。f0,f1,f2...)を定義しろ

//   0. 入力された数値に 3 を足した数を表示する
const f0 = (number0) => {
  return number0 + 3;
};
//   1. 入力された数値を 4 個並べて表示する（6 が入力されたら"6666"と表示する）
const f1 = (number1) => {
  return `${number1}${number1}${number1}${number1}`;
};
//   2. 入力された数値を 10 倍にして表示する
const f2 = (number2) => {
  return number2 * 10;
};
//   3. 入力された数値の回数だけ`hoge`と表示する
const f3 = (number3) => {
  for (i = 0; i < number3; i++) {
    return "hoge";
  }
};
//   4. 入力された数値にかかわらず 0 を表示する
const f4 = (number4) => {
  return 0;
};
// -`functionArray` という名前の配列にf0～f4の関数を格納せよ
// - for文を用いて、functionArrayに格納されたf0からf4までの関数を順に実行せよ。ただし各関数に渡す引数は添字のiとする。
//　また、for文は以下のものを使用せよ。
const functionArray = [f0, f1, f2, f3, f4];

for (let i = 0; i < functionArray.length; i++) {
  console.log(functionArray[i](i));
}

// 実行結果が以下のようになればOK
//3
//1111
//20
//hoge
//hoge
//hoge,
//0
