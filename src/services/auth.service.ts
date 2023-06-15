import axios from 'axios';
const baseUrl = 'https://reserva-laboratorios-production.up.railway.app/login';

interface user {
  user : string
  password : string
}

export const getUser = async(props : user) => {
  const data = props;
  console.log({data})
  const response = await axios.get(`${baseUrl}`,{data})
  console.log(response)
  return response
  // return fetch(baseUrl + `login/${userInfo}`).then(res => res.json());
};