'use client';

import { selector } from 'recoil';
import {
  userSignInInfo,
} from './atoms';

export const isSignInInfoFilled = selector({
  key: "isSignInInfoFilled",
  get: ({ get }) => {
    const info = get(userSignInInfo);
    return info.email.length > 0 && info.email.length > 0;
  },
});

