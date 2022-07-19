//配列操作の会（破壊的メソッド）
// - Array.push - 配列の最後に要素を追加する。他にもいろいろあるので調べてね。

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

//配列内の要素を使ってなにかする会（非破壊的メソッド）
// - Array.forEach　//何もリターンしない、ただ、配列内の要素を使って与えられた関数を実行するだけ
// - Array.find //return trueが帰った時に、その時の要素をひとつ返す
// - Array.filter // findの複数の戻り値を配列にして返す
// - Array.map //returnされたものを配列にして戻す。Arrayを基に新しい配列を作りたい時に使う

// const array = [4, 7, 9, 1, 5, 7, 3, 8, 0, 1, 9, 6, 0];
// console.log("===========================================");

// array.forEach((item, index) => {
//   console.log(item);
// });
// console.log("===========================================");
// console.log(
//   array.find((item) => {
//     return item >= 8;
//   })
// );
// console.log("===========================================");
// console.log(
//   array.filter((item) => {
//     return item % 2 === 0;
//   })
// );
// console.log("===========================================");
// console.log(
//   array.map((item) => {
//     const itemObject = { age: item };
//     return itemObject;
//   })
// );
// =========================================================================================================

// 1. 空の配列`userAgeArray`を作成し、その中にランダムな数値を for 文と Array.push を利用して 1000 個格納してください。
// - ただし、ランダムな数値は`const randomAge = Math.floor(Math.random() * 100);`を利用して作成すること
const userAgeArray = [];
for (i = 0; i < 1000; i++) {
  const randomAge = Math.floor(Math.random() * 100);
  userAgeArray.push(randomAge);
}
//console.log(userAgeArray);

// 2. 1.で作成したプログラムを拡張する。空の配列の名前を`userDataArray`とし、
// そこに格納するものをランダムな数値ではなく
// `const userObject = {id:ランダムな文字列, age:ランダムな数値, sex:ランダムな性別}`で定義されるオブジェクトとし、1000 件格納せよ。
// ただしランダムな文字列は`const randomId = Math.random().toString(36).slice(-8)`で、
// ランダムな性別は`const randomSex = Math.floor(Math.random() * 2)%2===0?"male":"female"`で定義すること。
const userDataArray = [];
for(i=0;i<30;i++){
  const randomId = Math.random().toString(36).slice(-8);
  const randomAge = Math.floor(Math.random() * 100);
  const randomSex = Math.floor(Math.random() * 2) % 2 === 0 ? "male" : "female";
  userDataArray.push({id:randomId,age:randomAge,sex:randomSex});
}
// 3. 2. で定義した userDataArray に対して Array.forEach メソッドを利用し、`ユーザID:xxxxxxxx 年齢：xx 性別:male`のような一行で表される書式ですべてのデータを`console.log()`で表示せよ。
//`ユーザID:abcdefg 年齢：14 性別:male`
//.....
//userDataArray.forEach((data)=>{
//  console.log(`ユーザーID:${data.id} 年齢:${data.age} 性別:${data.sex}`);
//})

// 4. 2. で定義した userDataArray に対して Array.find メソッドを利用し、年齢が 13 以上 16 未満、かつ男性のユーザを一名抽出し、表示せよ
console.log(
userDataArray.find((data)=>{
  if(data.age >= 13 && data.age < 16){
    return data.sex == "male" ;
  }
}))
// 5. 2. で定義した userDataArray に対して Array.filter メソッドを利用し、、年齢が 10 以上 16 未満、かつ男性のユーザをすべて抽出した配列を`shotaArray`として定義し、3. で定義した書式で表示せよ
const shotaArray = userDataArray.filter((data)=>{
  if(data.age >= 10 && data.age < 16){
    return data.sex == "male" ;
  }
});

shotaArray.forEach((data)=>{
  console.log(`ユーザーID:${data.id} 年齢:${data.age} 性別:${data.sex}`);
})

// 6. 2. で定義した userDataArray に対して Array.map メソッドを利用し、追加で`species:ランダムな犬or猫`の情報を追加せよ。ただしランダムな犬 or 猫の部分は`ランダムな性別`の定義方法を参考に、自身で実装せよ。

console.log(
userDataArray.map((data)=>{
  const randomSpecies = Math.floor(Math.random() * 2) % 2 === 0 ? "cat" : "dog";
  const pushSpecies = {id:data.id,age:data.age,sex:data.sex,species:randomSpecies};
  return pushSpecies;
})
);

//console.log(userDataArray.find((data)=>{return data.species == "dog";}));
//console.log(userDataArray);