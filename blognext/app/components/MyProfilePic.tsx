import Image from 'next/image';
type Props = {};
const MyProfilePic = (props: Props) => {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-black dark:border-slate-900 drop-shadow-xl shadow-black mx-auto rounded-full mt-10'
        src='/images/photo-1503023345310-bd7c1de61c7d.jpg'
        alt='blog'
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
};
export default MyProfilePic;
