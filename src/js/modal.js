import { refs } from './refs';

/**
 * У файлі modal.js зберігай функції модальних вікон (відкриття, закриття і так далі).
 */

export function openModal() {
  refs.modal.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.closeModalBtn.addEventListener('click', closeModal);
}

function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');

  refs.closeModalBtn.removeEventListener('click', closeModal);
}
