#!/bin/bash
# 傳入一個數字 n，產生 1~n 個檔案，檔名是 {number}.js。

for (( i=1; i <= ${1}; i=i+1))
do
        touch "$i.js";
        echo $i;
done

echo "檔案建立完成";
