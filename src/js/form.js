import { refs } from './refs';

import { registerUser } from './products-api';
import { iziToastError, iziToastSuccess } from './izi-toast';

let modalFormValidity = {
  name: false,
  email: false,
  phone: false,
  checkbox: false,
};

let joinFormValidity = {
  name: false,
  email: false,
  phone: false,
  checkbox: false,
};

const isValidPatternEmail = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const isValidPatternPhone = email => /^$|^\+38\d{10}$/.test(email.trim());

export function handleNameValidation(event) {
  const formType = window.innerWidth < 768 ? 'modal' : 'join';

  if (event.target.value.length < 4) {
    event.target.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'В імені має бути мінімум 4 символи';
    }

    if (formType == 'modal') {
      modalFormValidity.name = false;
    } else {
      joinFormValidity.name = false;
    }
  } else {
    event.target.classList.remove('is-invalid');
    if (formType == 'modal') {
      modalFormValidity.name = true;
    } else {
      joinFormValidity.name = true;
    }
  }
  checkFormValidity(formType);
}

export function handleEmailValidation(event) {
  const formType = window.innerWidth < 768 ? 'modal' : 'join';

  if (!isValidPatternEmail(event.target.value.trim())) {
    event.target.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'Не вірний формат E-mail';
    }

    if (formType == 'modal') {
      modalFormValidity.email = false;
    } else {
      joinFormValidity.email = false;
    }
  } else {
    event.target.classList.remove('is-invalid');

    if (formType == 'modal') {
      modalFormValidity.email = true;
    } else {
      joinFormValidity.email = true;
    }
  }
  checkFormValidity();
}

export function handlePhoneValidation(event) {
  const formType = window.innerWidth < 768 ? 'modal' : 'join';

  event.target.value = event.target.value.replace(/[^\d+]/g, '').slice(0, 13);

  if (!isValidPatternPhone(event.target.value.trim())) {
    event.target.classList.add('is-invalid');
    const errorEl = event.target.parentElement.querySelector('.error-massage');

    if (errorEl) {
      errorEl.textContent = 'Формат телефону має бути "+380XXXXXXXXX"';
    }

    if (formType == 'modal') {
      modalFormValidity.phone = false;
    } else {
      joinFormValidity.phone = false;
    }
  } else {
    event.target.classList.remove('is-invalid');

    if (formType == 'modal') {
      modalFormValidity.phone = true;
    } else {
      joinFormValidity.phone = true;
    }
  }
  checkFormValidity(formType);
}

export function handleCheckboxValidation(event) {
  const formType = window.innerWidth < 768 ? 'modal' : 'join';

  if (event.target.checked) {
    if (formType == 'modal') {
      modalFormValidity.checkbox = true;
    } else {
      joinFormValidity.checkbox = true;
    }
  } else {
    if (formType == 'modal') {
      modalFormValidity.checkbox = false;
    } else {
      joinFormValidity.checkbox = false;
    }
  }
  checkFormValidity(formType);
}

function checkFormValidity(formType) {
  if (formType === 'modal') {
    refs.ModalRegisterBtn.disabled = !(
      modalFormValidity.name &&
      modalFormValidity.email &&
      modalFormValidity.phone &&
      modalFormValidity.checkbox
    );
  }

  if (formType === 'join') {
    refs.JoinRegisterBtn.disabled = !(
      joinFormValidity.name &&
      joinFormValidity.email &&
      joinFormValidity.phone &&
      joinFormValidity.checkbox
    );
  }
}

export async function handleSubmit(event) {
  event.preventDefault();

  let userRequest;

  if (window.innerWidth < 768) {
    userRequest = {
      userName: refs.ModalInputName.value,
      email: refs.ModalInputEmail.value,
      phone: refs.ModalInputPhone.value,
      acceptPolicy: refs.ModalCheckbox.checked,
    };
  } else {
    userRequest = {
      userName: refs.JoinInputName.value,
      email: refs.JoinInputEmail.value,
      phone: refs.JoinInputPhone.value,
      acceptPolicy: refs.JoinCheckbox.checked,
    };
  }
  console.log('userRequest', userRequest);

  try {
    await registerUser(userRequest);
    iziToastSuccess(`Реєстрація успішна`);
    closeModal();
  } catch (error) {
    iziToastError('Щось пішло не так. Можливо тому що тут неіснуючий бекенд');
  }
}
