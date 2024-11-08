'use client';

import { signUpPageNo } from '@/Recoil';
import { useRecoilState } from 'recoil';
import { RoundedSmBtn } from '../Buttons';
import { RoundSmLink } from '../Links';

export const Page = ({
  title,
  subtitle,
  children,
  inputsFilled,
  handleSubmit = () => {},
  isSignIn = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  inputsFilled: boolean;
  handleSubmit?: () => void;
  isSignIn?: boolean;
}) => {
  const [pageNo, setPageNo] = useRecoilState(signUpPageNo);

  const displayMsg = () => {
    if (!inputsFilled) alert('Fill all the fields');
  };

  const nextPageHandler = () => {
    if (inputsFilled) setPageNo((prev) => prev + 1);
    else alert('Fill all the fields');
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
        {isSignIn ? (
          <div className='flex flex-row justify-end'>
            <RoundSmLink
              name={'Create account'}
              link='/auth/signup'
              id='signupLink'
            />

            <RoundedSmBtn name={'Enter'} action={handleSubmit} id='signInBtn' />
          </div>
        ) : (
          <div className='flex flex-row justify-between'>
            {pageNo !== 0 ? (
              <RoundedSmBtn
                name={'Back'}
                action={() => setPageNo((prev) => prev - 1)}
                id='backBtn'
              />
            ) : (
              <div className='w-1'></div>
            )}

            {pageNo !== 3 ? (
              <RoundedSmBtn
                name={'Next'}
                action={nextPageHandler}
                id='nextBtn'
              />
            ) : (
              <RoundedSmBtn
                name={'Create'}
                action={handleSubmit}
                id='createBtn'
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};
