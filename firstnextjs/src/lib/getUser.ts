const getUsers = async (userId: String) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!data.ok) {
    throw new Error('failed to load');
  }
  const res = await data.json();
  return res;
};
export default getUsers;
// https://jsonplaceholder.typicode.com/users
