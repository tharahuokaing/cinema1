/* =========================================================
   GOOGLE TRANSLATE INITIALIZATION SCRIPT
========================================================= */

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'km,en,th,zh-CN,ja,ko', // km = Khmer, en = English, etc.
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Dynamically load the Google Translate external script
(function() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
