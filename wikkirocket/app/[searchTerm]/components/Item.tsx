import Link from 'next/link';
import Image from 'next/image';

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  const src =
    result.thumbnail?.source ??
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';

  return (
    <article className='m-4 max-w-lg '>
      <div className='flex flex-row gap-4'>
        <div className=' flex flex-col justify-center'>
          <Image
            src={src}
            alt={result.title}
            width={result.thumbnail?.width ?? 50}
            height={result.thumbnail?.height ?? 50}
            loading='lazy'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h2>
            <Link
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target='_blank'
              className='text-xl font-bold underline'>
              {result.title}
            </Link>
          </h2>
          <p>{result.extract}</p>
        </div>
      </div>
    </article>
  );
};
export default Item;
