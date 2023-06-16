import Image from 'next/image';
import Post from './components/Post';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p
        className='mt-12 mb-12 text-3xl text-center dark:text-white
      '>
        Hello and welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I&rsquo;m <span className='font-bold'>Akhlaq</span>
        </span>
      </p>
      <Post />
    </main>
  );
}

