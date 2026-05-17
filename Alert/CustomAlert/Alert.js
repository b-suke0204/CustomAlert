// 25.11.29 B 自作アラートを作成

import { Localization } from "./Localization.js";

// 即時関数で実行し、アラート用要素のメモリを保持しない
// 即時関数をグローバル化
(function (global) {
    global.CustomAlert = { showAlert };
})(window);

// アラート読み込み
async function showAlert(message, targetPath) {
    const alertContainer = document.getElementById('alertOK');
    // ドキュメントルートからのパスを取得
    const originPath = window.location.origin + targetPath;
    let alertFilePath = originPath + '/CustomAlert/Alert.html';
    const response = await fetch(alertFilePath);

    const html = await response.text();
    alertContainer.innerHTML = html;

    applyShowingAnimationAlert(alertContainer);

    const localization = new Localization();
    const dict = localization.getCurrentLanguage();

    const alertConsentBtn = alertContainer.querySelector('#alert_consent_btn');
    const alertMessage = alertContainer.querySelector('#alert_message');
    alertConsentBtn.textContent = dict.close;
    alertMessage.textContent = message;  // アラートのメッセージ反映

    commitOKAlert(alertConsentBtn, alertContainer);
}

// コミット処理
function commitOKAlert(alertConsentBtn, alertContainer) {
    alertConsentBtn.addEventListener('click', async () => {
        await applyClosingAnimationAlert(alertContainer);
    }, { once: true });
}

// アラート閉じる時のアニメーション
async function applyClosingAnimationAlert(alertContainer) {
    const alertContents = alertContainer.querySelector('#alert_contents');
    const customAlert = alertContainer.querySelector('#custom_alert');
    // 表示時のアニメーションと逆の動きを行う
    const customAlertAnimation = customAlert?.animate(
        [
          { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          { opacity: 0, transform: 'translate(-50%, -46%) scale(0.96)' }
        ],
        { duration: 450, easing: 'ease', fill: 'forwards' }
    );
    const alertContentsAnimation = alertContents?.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 450, easing: 'ease', fill: 'forwards' }
    );
    // 終了待ち → 非表示
    await Promise.all([customAlertAnimation.finished, alertContentsAnimation.finished]);
    hiddenAlertContents(alertContents, customAlert);
}

// アラートで使われている要素を非表示にする
function hiddenAlertContents(alertContents, customAlert) {
    alertContents.style.visibility = 'hidden';
    customAlert.style.visibility = 'hidden';
}

// アラート表示時のアニメーション
function applyShowingAnimationAlert(alertContainer) {
    const alertContents = alertContainer.querySelector('#alert_contents');
    const customAlert   = alertContainer.querySelector('#custom_alert');
    // 表示時は、少し小さめに表示してから一気に設定したサイズにする
    customAlert?.animate(
        [
            { opacity: 0, transform: 'translate(-50%, -46%) scale(0.96)' },
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        ],
        { duration: 220, easing: 'ease', fill: 'forwards' }
    );
    // アラート文言の方は、ただ透明度を変えるだけ
    alertContents?.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 220, easing: 'ease', fill: 'forwards' }
    );
}


