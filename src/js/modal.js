import { refs } from './refs';
import {
  handleCheckboxValidation,
  handleEmailValidation,
  handleNameValidation,
  handlePhoneValidation,
  handleSubmit,
} from './form';

export function openModal() {
  refs.modal.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.ModalInputName.classList.remove('is-invalid');
  refs.ModalInputEmail.classList.remove('is-invalid');
  refs.ModalInputPhone.classList.remove('is-invalid');

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.ModalInputName.addEventListener('input', handleNameValidation);
  refs.ModalInputEmail.addEventListener('input', handleEmailValidation);
  refs.ModalInputPhone.addEventListener('input', handlePhoneValidation);
  refs.ModalCheckbox.addEventListener('change', handleCheckboxValidation);
  refs.ModalForm.addEventListener('submit', handleSubmit);
}

export function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');

  refs.ModalInputName.removeEventListener('input', handleNameValidation);
  refs.ModalInputEmail.removeEventListener('input', handleEmailValidation);
  refs.ModalInputPhone.removeEventListener('input', handlePhoneValidation);
  refs.ModalCheckbox.removeEventListener('change', handleCheckboxValidation);
  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.ModalForm.removeEventListener('submit', handleSubmit);
}
