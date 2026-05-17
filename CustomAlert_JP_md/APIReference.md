<span style="font-size:12pt">JavaScript</span>  
# CustomAlert API Reference  

## Global Functions  

```javascript
async function showAlert(message, targetPath)
```

以下のように即時関数で定義されているため、呼び出し時は、他の即時関数と命名が被らないようにする  

```javascript
(function (global) {
    global.CustomAlert = { showAlert };
})(window);
```

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| showAlert | `func` | - | アラートを表示する<br>CustomAlert.showAlertのように呼び出す |

### Props  

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | - | アラートに表示するメッセージ |
| targetPath | `string` | - | CustomAlertフォルダの一階層上のフォルダ名<br>`/Alert`のように指定 |

## CSS Classes  

| Class | Default | Description |
| --- | --- | --- |
| #alert_consent_btn | rgba(0, 159, 175, 1.0) | アラートのOKボタンのプロパティ |


