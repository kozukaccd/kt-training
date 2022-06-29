// 1. "Hello World"と表示せよ
console.log("Hello World");
// 2. 10429+501923 の計算結果を表示せよ
console.log(10429+501923);
// 3. 51044-4976 の計算結果を表示せよ
console.log(51044-4976);
// 4. 45018×1049 の計算結果を表示せよ
console.log(45018*1049);
// 5. 10480÷20 の計算結果を表示せよ
console.log(10480/20);
// 6. 104923 を 2940 で割ったあまりを表示せよ
console.log(104923%2940);
// 7. "114"と"514"のふたつの数字をつなげて表示せよ
console.log("114"+"514");
// 8. 1 から 10 までの数字が順に格納された配列を作成し、console.log で表示せよ

let hoge = [1,2,3,4,5,6,7,8,9,10]
console.log(hoge);

// 9. 好きな対象を想定し、それがもつ情報をプロパティ名とプロパティとして自由に設定した連想配列を作成し、console.log で表示せよ
let ichiba = {age:28, species:'tomato', hobby: 'oekaki'}
let quest ={age:4,kinds:`amesyo`,home:`kanagawa`}

console.log(`私は${quest.age}歳です。${quest.home}に住んでいます`);

// 10. 数字を引数として受け取り、それを表示する関数を定義し、好きな数を引数に設定して一度実行せよ。ただし関数の定義の際にはアロー関数を用いること。

const tanda = (kai)=>{
    console.log(kai);
}
tanda(1);

// 11. 10 で定義した関数の引数に 1-100 までの数字を渡して順に実行せよ。ただし実行の際には for 文を用いること。

//for(i=1;i<=100;i++){
//    tanda(i);
//}

// 12. 10,11 で作成したプログラムを拡張しろ。
// ただし、3 の倍数のときは数字の代わりに Fizz と表示し、
// 5 の倍数のときは数字の代わりに Buzz と表示し、
// 15 の倍数のときは数字の代わりに FizzBuzz と表示すること


const fizzbuzz = (int)=>{
    if(int%15===0){
        console.log("FizzBuzz");
            }
            else if(int%5===0){
                console.log("Buzz");
                    }
                   else if(int%3===0){
                        console.log("Fizz");
                            }
                            else console.log(int);
}
for(i=1;i<=100;i++){
    fizzbuzz(i);
}

// 13. 12 で作成したプログラムを以下の仕様で拡張し、"customFizzBuzz"という名称の関数として定義して、任意の引数の値で一度実行せよ。
// 第一引数に表示する数字の最大値を（11 のプログラムにおける 100）受け取る
// 第二引数に Fizz と表示したい倍数の値（3）を受け取る
// 第三引数に Buzz と表示したい倍数の値(5)を受け取る、
// 第二引数と第三引数の最小公倍数の値のときには FizzBuzz と表示する
const customFizzBuzz = (max,fizz,buzz)=>{
    for(i=1;i<=max;i++){
         if(i%buzz===0){
            if(i%fizz===0){
                console.log("FizzBuzz");
                }
                else console.log("Buzz");
                    }
                   else if(i%fizz===0){
                        console.log("Fizz");
                            }
                            else console.log(i);
                        }
}
customFizzBuzz(100,10,20)

