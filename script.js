// Небольшой динамический эффект — меняющиеся точки в заголовке
const title = document.querySelector('.title');
const baseText = '🚧 Site Under Construction 🚧';
let dots = 0;

setInterval(() => {
    dots = (dots + 1) % 4;
    document.title = 'Coming Soon' + '.'.repeat(dots);
}, 500);
