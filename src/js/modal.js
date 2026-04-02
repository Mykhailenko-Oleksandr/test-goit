import { refs } from './refs';

/**
 * У файлі modal.js зберігай функції модальних вікон (відкриття, закриття і так далі).
 */

export function openModal() {
  refs.modal.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.ModalRegisterBtn.addEventListener('click', handleSubmit);
}

export function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');

  refs.closeModalBtn.removeEventListener('click', closeModal);
}

function handleSubmit(e) {
  e.preventDefault();
}
