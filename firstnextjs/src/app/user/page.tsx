import getUsers from '@/lib/getUsers';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users } from '../../../types';

export const metadata: Metadata = {
  title: 'users',
};

const User = async () => {
  const usersData: Promise<Users[]> = await getUsers();

  return (
    <section>
      {(await usersData).map((user) => (
        <div key={user.id}>
          <h3>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </h3>
        </div>
      ))}
    </section>
  );
};
export default User;
