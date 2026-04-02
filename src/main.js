import { handleCheckWidth } from './js/handlers';
import { startTimer } from './js/timer';
import { refs } from './js/refs';

/**
 * У файлі main.js логіка сторінки Index (index.html)
 */
// console.log(refs.JoinInputName);

window.addEventListener('resize', handleCheckWidth);
handleCheckWidth();

startTimer();
