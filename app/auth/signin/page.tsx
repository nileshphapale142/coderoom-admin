"use client";

import { Page, SignInSec } from "@/components/Auth";
import { isSignInInfoFilled, userSignInInfo } from "@/Recoil";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";
import { SignInAction } from "./action";

const SignIn = () => {
  //todo: add modularity
  const signInInfo = useRecoilValue(userSignInInfo);
  const isInfoFilled = useRecoilValue(isSignInInfoFilled);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!isInfoFilled) {
      alert("Fill all fields");
      return;
    }

    const data = {
      userName: signInInfo.userName,
      password: signInInfo.password,
    };

    const { status } = await SignInAction(data);

    if (status === 201) router.push("/");
    else if (status === -1) alert("unknown problem");
    else if (status === 400) alert("Data not in correct format (server issue)");
    else if (status === 500) alert("server error");
    else if (status === 403) alert("user-name or password not correct");
    else alert("wtf");

  };
  return (
    <div className="google-bw-bg absolute bottom-0 left-0 right-0 top-0">
      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex-grow"></div>

        <div className="mx-auto w-70r rounded-7 border-none bg-white p-9 py-12 ">
          <div className="flex flex-grow flex-row">
            <div className="flex flex-grow flex-row flex-wrap">
              <Page
                title="Sign-In As Admin"
                subtitle="Enter user-name and password to sign-in"
                inputsFilled={isInfoFilled}
                handleSubmit={handleSignIn}
              >
                <SignInSec />
              </Page>
            </div>
          </div>
        </div>

        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default SignIn;
