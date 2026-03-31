/**
 * У файлі handlers.js зберігай хендлери, які передаються в addEventListener.
 */

import { refs } from './refs.js';
import { openModal } from './modal.js';

let isListenerOnRegisterBtnMob = false;

export function handleCheckWidth() {
  if (window.innerWidth < 768 && !isListenerOnRegisterBtnMob) {
    refs.registerBtnMob.addEventListener('click', openModal);
    isListenerOnRegisterBtnMob = true;
  } else if (window.innerWidth >= 768 && isListenerOnRegisterBtnMob) {
    refs.registerBtnMob.removeEventListener('click', openModal);
    isListenerOnRegisterBtnMob = false;
  }
}
