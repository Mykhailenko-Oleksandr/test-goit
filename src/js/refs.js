export const refs = {
  body: document.querySelector('body'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.close-modal-btn'),
  registerBtnMob: document.querySelector('button[data-id="registerBtnMob"]'),

  // Modal form
  ModalForm: document.querySelector('.form-modal'),
  ModalInputName: document.querySelector('#modal-input-name'),
  ModalInputEmail: document.querySelector('#modal-input-email'),
  ModalInputPhone: document.querySelector('#modal-input-phone'),
  ModalCheckbox: document.querySelector('#modal-checkbox'),
  ModalRegisterBtn: document.querySelector('.modal-submit-btn'),

  // Join form
  JoinForm: document.querySelector('.form-join'),
  JoinInputName: document.querySelector('#join-input-name'),
  JoinInputEmail: document.querySelector('#join-input-email'),
  JoinInputPhone: document.querySelector('#join-input-phone'),
  JoinCheckbox: document.querySelector('#join-checkbox'),
  JoinRegisterBtn: document.querySelector('.join-register-btn'),

  // Timer
  timerDays: document.querySelectorAll('span[data-days]'),
  timerHours: document.querySelectorAll('span[data-hours]'),
  timerMinutes: document.querySelectorAll('span[data-minutes]'),
  timerSeconds: document.querySelectorAll('span[data-seconds]'),
};
