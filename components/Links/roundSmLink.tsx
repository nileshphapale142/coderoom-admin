import Link from 'next/link';

export const RoundSmLink = ({
  name,
  link,
  id = '',
}: {
  name: string;
  link: string;
  id?: string;
}) => {
  return (
    <div className='flex items-center justify-center px-2 py-1'>
      <div className=''>
        <div className='text-style text-white'>
          <Link
            className='flex h-10 w-auto items-center justify-center rounded-5 border-none bg-blue-600 px-4
                    py-2 opacity-100 transition-opacity hover:opacity-90'
            href={link}
            id={id}
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};
