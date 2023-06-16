import Link from 'next/link';
import { formattedDate as formatDate } from '@/lib/post';

type Props = {
  post: BlogPost;
};
const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = formatDate(date);

  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/post/${id}`}>
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  );
};
export default ListItem;
