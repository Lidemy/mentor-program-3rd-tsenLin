## 什麼是 Ajax？
非同步與伺服器交換資料的 JavaScript。


## 用 Ajax 與我們用表單送出資料的差別在哪？
伺服器回傳資料時，會經過瀏覽器傳給 JavaScript，而不是回傳給瀏覽器，所以瀏覽器不會直接呈現結果。


## JSONP 是什麼？
利用載入 JavaScript 不受同源政策的限制，載入回傳 JavaScript 物件的檔案來取得資料。

## 要如何存取跨網域的 API？
* 伺服器在 Response 的 Header 裡面加上Access-Control-Allow-Origin。
* 利用 JSONP


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為跨網域的限制是瀏覽器加上去的。第四週的執行環境是 Node.js。
