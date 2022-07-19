# JS から DOM を触ろうの会

## DOM とは？

Document Object Model のこと。プログラムから html を操作するための仕組みのこと。

今回使うもの

```javascript
document.getElementById("id"); //id名からHtmlElementを取得
document.getElementsByClass("class-name"); //class名からHtmlCollectionを取得（配列ではないので注意）
Array.from(HtmlCollection); //HtmlCollectionでforEach等のArrayクラスメソッドを利用する方法
HtmlElement.classList.add("class-namme"); //HtmlElementにclass-nameのクラスを追加
```
