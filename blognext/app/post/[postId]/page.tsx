import { formattedDate, getSinglePost, getSortedPostData } from '@/lib/post';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: { postId: string };
};

export const generateMetadata = async ({ params: { postId } }: Props) => {
  const posts = getSortedPostData(); // deduped req data where you need so this will be one req even we are sending 2 (one in main page one here)

  //if the requested post is not found return a not-found page(not-Found.tsx)
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return { title: 'Page Not Found' };
  }

  return {
    title: post?.title,
  };
};

//for ssg predicting and rendering all pages
export function getStaticParams({ params: { postId } }: Props) {
  const posts = getSortedPostData();

  return posts.map((post) => {
    return { postId: post.id };
  });
}

const page = async ({ params: { postId } }: Props) => {
  const posts = getSortedPostData(); // deduped req data where you need so this will be one req even we are sending 2 (one in main page one here)

  //if the requested post is not found return a not-found page(not-Found.tsx)
  if (!posts.find((post) => post.id === postId)) {
    notFound(); //this will call not-found.tsx component
  }

  const { title, date, contentHtml } = await getSinglePost(postId);

  const pubDate = formattedDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>← Back to home</Link>
        </p>
      </article>
    </main>
  );
};
export default page;
