import { handleCheckWidth } from './js/handlers';
import { startTimer } from './js/timer';

window.addEventListener('resize', handleCheckWidth);
handleCheckWidth();

startTimer();
