export const refs = {
  body: document.querySelector('body'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.close-modal-btn'),
  registerBtnMob: document.querySelector('button[data="registerBtnMob"]'),

  JoinRegisterBtn: document.querySelector('.join-register-btn'),

  // Modal form
  ModalInputName: document.querySelector('#modal-input-name'),
  ModalInputEmail: document.querySelector('#modal-input-email'),
  ModalInputPhone: document.querySelector('#modal-input-phone'),
  ModalCheckbox: document.querySelector('#modal-checkbox'),
  ModalRegisterBtn: document.querySelector('.modal-submit-btn'),

  // Timer
  timerDays: document.querySelectorAll('span[data-days]'),
  timerHours: document.querySelectorAll('span[data-hours]'),
  timerMinutes: document.querySelectorAll('span[data-minutes]'),
  timerSeconds: document.querySelectorAll('span[data-seconds]'),
};
