const getUserPost = async (userId: String) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  if (!data.ok) {
    throw new Error('failed to load');
  }
  const res = await data.json();
  return res;
};
export default getUserPost;
// https://jsonplaceholder.typicode.com/users
