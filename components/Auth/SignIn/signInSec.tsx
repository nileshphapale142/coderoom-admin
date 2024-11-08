'use client';

import { BasicInput } from '@/components/Inputs';
import { CheckBox } from '@/components/Utils';
import { userSignInInfo } from '@/Recoil';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export const SignInSec = () => {
  const [showPass, setShowPass] = useState(false);
  const [info, setInfo] = useRecoilState(userSignInInfo);

  return (
    <>
      <div className='w-full '>
        <BasicInput
          title='Email'
          inputHandler={(email) => {
            setInfo((prev) => {
              return { ...prev, email: email };
            });
          }}
          defaultInput={info.email}
          width={'100%'}
          inputType='email'
          id='email'
        />
      </div>

      <div className='mt-4 w-full'>
        <BasicInput
          title='Password'
          inputHandler={(password) =>
            setInfo((prev) => {
              return { ...prev, password: password };
            })
          }
          defaultInput={info.password}
          inputType={showPass ? 'text' : 'password'}
          width={'100%'}
          id='password'
        />
      </div>

      <CheckBox action={() => setShowPass((prev) => !prev)} />
    </>
  );
};
