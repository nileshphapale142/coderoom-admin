'use client';

import { atom } from 'recoil';


export const userSignInInfo = atom<{
  email: string;
  password: string;
}>({
  key: "userSignInInfo",
  default: {
    email: "",
    password: "",
  },
});

export const signUpPageNo = atom({
  key: "signUpPageNo",
  default: 0,
});

