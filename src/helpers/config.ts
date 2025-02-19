// ToDo Вынести API_KEYS в env file
export const API_KEYS = [
  '8P3XD5qWNwO00g66kpg4wU4LDIcbrG9i',
  '6iyZk3ocW8vxM3E6D9drsnlvrYSYsdl1',
  'wLmYNTAUIYpOTGMv22A7eVQ0U1ojwvFc',
  'NZ7YeOlFrULcuYZqah4c2ASSttduXZww',
];

export const MY_HEADERS = new Headers();
MY_HEADERS.append('apikey', API_KEYS[0]);

export const BASE_API_URL = 'https://api.apilayer.com';

export const SYMBOLS = 'RUB,USD,EUR,JPY,GBP,CHF,AUD,CAD,NZD,CNY,SEK,MXN,SGD,HKD,NOK,INR,ZAR,THB,AED,PLN';

// При значении true, курсы валют будут плавно скролиться вниз
export const AUTO_SCROLL = true;

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];
