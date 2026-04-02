import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function iziToastError(message) {
  return iziToast.error({
    message: message,
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '24',
    backgroundColor: '#6b0609',
    position: 'topRight',
    progressBarColor: '#420406ff',
    theme: 'dark',
  });
}

export function iziToastSuccess(message) {
  return iziToast.success({
    message: message,
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '24',
    backgroundColor: '#59a10d',
    position: 'topRight',
    progressBarColor: '#b5ea7c',
    theme: 'dark',
  });
}
