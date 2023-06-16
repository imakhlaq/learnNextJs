const getUsers = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!data.ok) {
    throw new Error('failed to load');
  }
  const res = await data.json();
  return res;
};
export default getUsers;
// https://jsonplaceholder.typicode.com/users
