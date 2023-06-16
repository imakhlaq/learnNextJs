'use client';

import { FormEvent, useState } from 'react';
//new router
import { useRouter } from 'next/navigation';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-50 flex justify-center md:justify-between'>
      <input
        type='text'
        className='bg-white p-2 w-80 text-xl rounded-xl'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'
        type='submit'>
        🔍
      </button>
    </form>
  );
};
export default Search;
