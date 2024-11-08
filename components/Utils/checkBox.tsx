'use client';
import { useState } from 'react';

export const CheckBox = ({ action }: { action: () => void }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    action();
  };

  return (
    <div className='ml-1 mt-2 w-full'>
      <div className='flex items-start justify-start'>
        <label className='flex cursor-pointer' htmlFor='showPassword'>
          <div className='flex items-center justify-center py-[0.15em]'>
            <input
              type='checkbox'
              id='showPassword'
              className='cursor-pointer rounded'
              checked={isChecked}
              onChange={handleChange}
            />
          </div>
          <div
            className='flex items-center justify-center pl-4'
            onClick={handleChange}
          >
            <span className='text-style cursor-pointer'>Show Password</span>
          </div>
        </label>
      </div>
    </div>
  );
};
