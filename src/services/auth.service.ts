const baseUrl = 'https://reserva-laboratorios-production.up.railway.app/';

export const getUser = (codigo: string) => {
  return fetch(baseUrl + `login/${codigo}`).then(res => res.json());
};