let lang = 'ru';

function toggleLang() {
    lang = lang === 'en' ? 'ru' : 'en';
    
    // Переводим все элементы с data-ru / data-en
    document.querySelectorAll('[data-ru], [data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text !== null) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else if (el.tagName === 'TITLE') {
                document.title = text;
            } else {
                el.textContent = text;
            }
        }
    });
}

// При загрузке страницы применяем текущий язык
document.addEventListener('DOMContentLoaded', () => {
    toggleLang();
});