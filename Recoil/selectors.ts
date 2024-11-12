'use client';

import { selector } from 'recoil';
import {
  userSignInInfo,
} from './atoms';

export const isSignInInfoFilled = selector({
  key: "isSignInInfoFilled",
  get: ({ get }) => {
    const info = get(userSignInInfo);
    return info.userName.length > 0 && info.password.length > 0;
  },
});

