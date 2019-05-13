## 請以自己的話解釋 API 是什麼
* 用來交換資料的介面


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 201 新增成功
* 403 無訪問權限。伺服器收到請求但拒絕提供服務。
* 504 網路連線逾時。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

* 回傳所有餐廳資料
	* Method: GET
	* Path: /restaurants
  * 參數: _limit:限制回傳資料數量
  * 範例: /restaurants?_limit=10
  * 回傳:
    * name: 餐廳名稱
    * opening: 營業時間
    * address: 地址
    * phone: 電話

* 回傳單一餐廳資料
  * Method: GET
  * Path: /restaurants/:id
  * 參數: 無
  * 範例: /restaurants/1
  * 回傳:
    * name: 餐廳名稱
    * opening: 營業時間
    * address: 地址
    * phone: 電話

* 刪除餐廳
  * Method: DELETE
  * Path: /restaurants/:id
  * 參數: 無
  * 範例: /restaurants/1
  * 回傳: 無

* 新增餐廳
  * Method: :POST
  * Path: /restaurants
  * 參數: 
    * name: 餐廳名稱
    * opening: 營業時間
    * address: 地址
    * phone: 電話
  * 範例: /restaurants
  * 回傳: 無

* 更改餐廳
  * Method: PATCH
  * Path: /restaurants/:id
  * 參數: 
    * name: 餐廳名稱
    * opening: 營業時間
    * address: 地址
    * phone: 電話
  * 範例: /restaurants/1
  * 回傳: 無
