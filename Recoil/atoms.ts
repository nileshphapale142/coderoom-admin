'use client';

import { atom } from 'recoil';


export const userSignInInfo = atom<{
  userName: string;
  password: string;
}>({
  key: "userSignInInfo",
  default: {
    userName: "",
    password: "",
  },
});
