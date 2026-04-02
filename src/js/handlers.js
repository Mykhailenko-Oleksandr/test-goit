import { refs } from './refs.js';
import { closeModal, openModal } from './modal.js';
import {
  handleCheckboxValidation,
  handleEmailValidation,
  handleNameValidation,
  handlePhoneValidation,
  handleSubmit,
} from './form.js';

let isListenerOnRegisterBtnMob;

export function handleCheckWidth() {
  if (window.innerWidth < 768 && isListenerOnRegisterBtnMob !== true) {
    refs.registerBtnMob.addEventListener('click', openModal);

    refs.JoinInputName.removeEventListener('input', handleNameValidation);
    refs.JoinInputEmail.removeEventListener('input', handleEmailValidation);
    refs.JoinInputPhone.removeEventListener('input', handlePhoneValidation);
    refs.JoinCheckbox.removeEventListener('change', handleCheckboxValidation);
    refs.JoinForm.removeEventListener('submit', handleSubmit);

    isListenerOnRegisterBtnMob = true;
  } else if (window.innerWidth >= 768 && isListenerOnRegisterBtnMob !== false) {
    refs.registerBtnMob.removeEventListener('click', openModal);

    refs.JoinInputName.addEventListener('input', handleNameValidation);
    refs.JoinInputEmail.addEventListener('input', handleEmailValidation);
    refs.JoinInputPhone.addEventListener('input', handlePhoneValidation);
    refs.JoinCheckbox.addEventListener('change', handleCheckboxValidation);
    refs.JoinForm.addEventListener('submit', handleSubmit);

    isListenerOnRegisterBtnMob = false;

    if (refs.modal.classList.contains('is-open')) {
      closeModal();
    }
  }
}
