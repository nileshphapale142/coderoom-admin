'use client';

import { RoundedSmBtn } from '../Buttons';

export const Page = ({
  title,
  subtitle,
  children,
  inputsFilled,
  handleSubmit = () => {},
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  inputsFilled: boolean;
  handleSubmit?: () => void;
}) => {

  const displayMsg = () => {
    if (!inputsFilled) alert('Fill all the fields');
  };

  return (
    <>
      <div className='flex w-1/2 flex-col items-start justify-start pr-6'>
        <div
          className='text-heading mt-5 break-words text-4xl font-normal
                leading-5 '
        >
          <h1>{title}</h1>
        </div>
        <div className='text-style mt-5 text-base font-light'>
          <span>{subtitle}</span>
        </div>
      </div>

      {/* //todo: make this rigit component responsive */}
      <div className='min-h-10r max-w-50p flex-grow pl-6 '>
        <div className='flex min-w-20r flex-col items-start justify-start'>
          {children}
        </div>
      </div>

      {/* //todo: password validation */}

      <div className='mt-10 w-full'>
        {
          <div className='flex flex-row justify-end'>
            <RoundedSmBtn name={'Enter'} action={handleSubmit} id='signInBtn' />
          </div>
        }
      </div>
    </>
  );
};
