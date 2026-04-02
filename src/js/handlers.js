/**
 * У файлі handlers.js зберігай хендлери, які передаються в addEventListener.
 */

import { refs } from './refs.js';
import { closeModal, openModal } from './modal.js';

let isListenerOnRegisterBtnMob = false;

export function handleCheckWidth() {
  if (window.innerWidth < 768 && !isListenerOnRegisterBtnMob) {
    refs.registerBtnMob.addEventListener('click', openModal);
    refs.JoinRegisterBtn.removeEventListener('submit', handleSubmit);
    isListenerOnRegisterBtnMob = true;
  } else if (window.innerWidth >= 768 && isListenerOnRegisterBtnMob) {
    refs.registerBtnMob.removeEventListener('click', openModal);
    refs.JoinRegisterBtn.addEventListener('submit', handleSubmit);
    isListenerOnRegisterBtnMob = false;

    if (refs.modal.classList.contains('is-open')) {
      closeModal();
    }
  }
}
