import getUserPost from '@/lib/getUserPost';
import getUsers from '@/lib/getUser';
import { Post, Users } from '../../../../types';
import { Suspense } from 'react';
import UserPosts from './components/UserPost';
import type { Metadata } from 'next';

type Params = {
  params: {
    userId: String;
  };
};

//Dynamic meta data
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // you are doing same req twice in one page it will be one not two req
  const userData: Promise<Users> = await getUsers(userId);
  return {
    title: (await userData).name,
    description: (await userData).email,
  };
}

// here in one page we are fetching data in parallel
// means there are two request happing simultaneously user and user detail fetching at same time
const UserPage = async ({ params: { userId } }: Params) => {
  //no await
  const userData: Promise<Users> = getUsers(userId);

  const userPostData: Promise<Post[]> = getUserPost(userId);

  //Streaming and suspense to progressively load a page and show a result to user while the rest of the content loads
  return (
    <>
      <h2>{(await userData).name}</h2>
      <Suspense fallback={<p>Loading</p>}>
        {/* @ts-expect-error Server Componets */}
        <UserPosts posts={userPostData} />
      </Suspense>
    </>
  );
};
export default UserPage;
