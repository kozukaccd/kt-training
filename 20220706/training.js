// 1. 空の配列`userAgeArray`を作成し、その中にランダムな数値を for 文と Array.push を利用して 1000 個格納してください。ランダムな数値は
// - ただし、ランダムな数値は`const randomAge = Math.floor(Math.random() * 100);`を利用して作成すること
const userAgeArray = [];
const randomAge = Math.floor(Math.random() * 100);

// 2. 1.で作成したプログラムを拡張する。空の配列の名前を`userDataArray`とし、
// そこに格納するものをランダムな数値ではなく
// `const userObject = {id:ランダムな文字列, age:ランダムな数値, sex:ランダムな性別}`で定義されるオブジェクトとし、1000 件格納せよ。
// ただしランダムな文字列は`const randomId = Math.random().toString(36).slice(-8)`で、
// ランダムな性別は`const randomSex = Math.floor(Math.random() * 2)%2===0?"male":"female"`で定義すること。
const userDataArray = [];
const randomId = Math.random().toString(36).slice(-8);
const randomSex = Math.floor(Math.random() * 2) % 2 === 0 ? "male" : "female";

// 3. 2. で定義した userDataArray に対して Array.forEach メソッドを利用し、`ユーザID:xxxxxxxx 年齢：xx 性別:male`のような一行で表される書式ですべてのデータを`console.log()`で表示せよ。

// 4. 2. で定義した userDataArray に対して Array.find メソッドを利用し、年齢が 13 以上 16 未満、かつ男性のユーザを一名抽出し、表示せよ

// 5. 2. で定義した userDataArray に対して Array.filter メソッドを利用し、、年齢が 10 以上 16 未満、かつ男性のユーザをすべて抽出した配列を`shotaArray`として定義し、3. で定義した書式で表示せよ

// 6. 2. で定義した userDataArray に対して Array.map メソッドを利用し、追加で`species:ランダムな犬or猫`の情報を追加せよ。ただしランダムな犬 or 猫の部分は`ランダムな性別`の定義方法を参考に、自身で実装せよ。
