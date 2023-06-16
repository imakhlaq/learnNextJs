import { Post } from '../../../../../types';

type Props = {
  posts: Promise<Post[]>;
};

const UserPosts = async ({ posts }: Props) => {
  const data: Post[] = await posts;
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
export default UserPosts;
