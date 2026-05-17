<span style="font-size:12pt">JavaScript</span>  
# CustomAlert QuickStart  

## 導入方法  

**Step1.** GithubからCustomAlertフォルダをダウンロード  

**Step2.** 使用するHTMLファイルと同じ階層にフォルダを置く  

## CSS読み込み  

カスタムアラートを使用するプロジェクトファイルに以下のCSSファイルを読み込む  

```javascript
<link rel="stylesheet" href="./CustomAlert/Alert_base.css">
```

アラートのボタンの色を変更したい場合は、以下のCSSを使用する  
```javascript
<style>
    #alert_consent_btn {
        color: orange;
    }
</style>
```

## JavaScript読み込み  

カスタムアラートを使用するプロジェクトファイルに以下のJSファイルを読み込む  

```javascript
<script type="module" src="./CustomAlert/Alert.js"></script>
```

## CustomAlertをbodyに追加  

```javascript
<body>
    <p id="alertBtn">show Alert!!</p>
    <div id="alertOK"></div>
</body>
```

## アラート処理追加  

scriptタグにカスタムアラート表示処理を追加する  

```javascript
<script>
    const alertBtn = document.getElementById('alertBtn');
    // CustomAlertフォルダの一つ上の階層のフォルダ名を指定
    const targetAlertPath = "/Alert"

    showAlert();

    function showAlert() {
        alertBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const message = "The alert was shown!";
            CustomAlert.showAlert(message, targetAlertPath);
        });
    }
</script>
```

## See Also  

- ### Sample  
    <a href="./Sample.md" target="_blank">Sample</a>  



