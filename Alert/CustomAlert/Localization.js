// 25.11.29 B　ローカリゼーションクラス作成

export class Localization {

    i18n = {
        ja: {
            close: "閉じる"
        },
        en: {
            close: "OK"
        },
        ch: {
            close: "确定"
        }
    };

    getCurrentLanguage(lang = navigator.language.slice(0, 2)) {
        const dict = this.i18n[lang] || this.i18n[en];
        return dict;
    }

}