// TODO: Вынести API_KEY в env файл(?), реализовать логику по подмене API_KEY
export const API_KEY = '6iyZk3ocW8vxM3E6D9drsnlvrYSYsdl1';
// 6iyZk3ocW8vxM3E6D9drsnlvrYSYsdl1
// wLmYNTAUIYpOTGMv22A7eVQ0U1ojwvFc
// NZ7YeOlFrULcuYZqah4c2ASSttduXZww

export const MY_HEADERS = new Headers();
MY_HEADERS.append('apikey', API_KEY);

export const BASE_API_URL = 'https://api.apilayer.com';

// TODO: Добавить больше курсов валют (расширить список)
export const SYMBOLS = 'RUB,AUD,CAD,EUR,GBP,JPY,NZD';

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];
