import axios from 'axios';

export async function registerUser(obj) {
  const response = await axios.post('https://example.com/register', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}
