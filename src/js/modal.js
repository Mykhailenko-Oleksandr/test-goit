import { refs } from './refs';

import { registerUser } from './products-api';
import { iziToastError, iziToastSuccess } from './izi-toast';

let isValidName = false;
let isValidEmail = false;
let isValidPhone = false;
let isValidCheckbox = false;

const isValidPatternEmail = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const isValidPatternPhone = email => /^$|^\+38\d{10}$/.test(email.trim());

export function openModal() {
  refs.modal.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.ModalRegisterBtn.addEventListener('click', handleSubmit);

  refs.ModalInputName.classList.remove('is-invalid');
  refs.ModalInputEmail.classList.remove('is-invalid');
  refs.ModalInputPhone.classList.remove('is-invalid');

  refs.ModalInputName.addEventListener('input', handleNameValidation);
  refs.ModalInputEmail.addEventListener('input', handleEmailValidation);
  refs.ModalInputPhone.addEventListener('input', handlePhoneValidation);
  refs.ModalCheckbox.addEventListener('change', handleCheckboxValidation);
  refs.ModalRegisterBtn.addEventListener('submit', handleSubmit);
}

export function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');

  refs.closeModalBtn.removeEventListener('click', closeModal);
}

function handleNameValidation(event) {
  if (event.target.value.length < 4) {
    refs.ModalInputName.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'В імені має бути мінімум 4 символи';
    }
    isValidName = false;
  } else {
    refs.ModalInputName.classList.remove('is-invalid');
    isValidName = true;
  }
  checkFormValidity();
}

function handleEmailValidation(event) {
  if (!isValidPatternEmail(event.target.value.trim())) {
    refs.ModalInputEmail.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'Не вірний формат E-mail';
    }
    isValidEmail = false;
  } else {
    refs.ModalInputEmail.classList.remove('is-invalid');
    isValidEmail = true;
  }
  checkFormValidity();
}

function handlePhoneValidation(event) {
  event.target.value = event.target.value.replace(/[^\d+]/g, '').slice(0, 13);

  if (!isValidPatternPhone(event.target.value.trim())) {
    refs.ModalInputPhone.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'Формат телефону має бути "+380XXXXXXXXX"';
    }
    isValidPhone = false;
  } else {
    refs.ModalInputPhone.classList.remove('is-invalid');
    isValidPhone = true;
  }
  checkFormValidity();
}

function handleCheckboxValidation(event) {
  if (event.target.checked) {
    isValidCheckbox = true;
  } else {
    isValidCheckbox = false;
  }
  checkFormValidity();
}

function checkFormValidity() {
  if (isValidName && isValidEmail && isValidPhone && isValidCheckbox) {
    refs.ModalRegisterBtn.disabled = false;
  } else {
    refs.ModalRegisterBtn.disabled = true;
  }
}

export async function handleSubmit(e) {
  e.preventDefault();

  const userRequest = {
    userName: refs.ModalInputName.value,
    email: refs.ModalInputEmail.value,
    phone: refs.ModalInputPhone.value,
    acceptPolicy: refs.ModalCheckbox.checked,
  };

  try {
    await registerUser(userRequest);
    iziToastSuccess(`Реєстрація успішна`);
    closeModal();
  } catch (error) {
    iziToastError('Щось пішло не так. Можливо тому що тут неіснуючий бекенд');
  }
}
