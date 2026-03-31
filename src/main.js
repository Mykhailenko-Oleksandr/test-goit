import { handleCheckWidth } from './js/handlers';
import { refs } from './js/refs';

/**
 * У файлі main.js логіка сторінки Index (index.html)
 */

window.addEventListener('resize', handleCheckWidth);
handleCheckWidth();
