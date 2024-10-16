const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}