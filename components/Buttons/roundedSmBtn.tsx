import React from 'react';

export const RoundedSmBtn = ({
  name,
  action,
  id = '',
}: {
  name: string;
  action: () => void;
  id?: string;
}) => {
  return (
    <div className='flex items-center justify-center px-2 py-1'>
      <div className=''>
        <div className='text-style text-white'>
          <button
            className='flex h-10 w-auto items-center justify-center rounded-5 border-none bg-blue-600 px-4
                py-2 opacity-100 transition-opacity hover:opacity-90'
            onClick={action}
            id={id}
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};
