import React from "react";
import { fetchUnVerifiedTeachers } from "./action";
import { redirect } from "next/navigation";


interface Teacher {
  id: number;
  name: string;
  email: string;
}


const UserRow = ({ name, email }: { name: string; email: string }) => {
  return (
    <div
      className="font-base text-xl flex w-2/3 flex-wrap flex-row justify-between p-4 border rounded-4 border-gray my-1 cursor-default hover:bg-google-bw transition-all"
    >
      <div className="py-1 flex justify-start items-center text-center" style={{ flexBasis: "30%" }}>
        {name}
      </div>

      <div className="py-1 flex justify-start items-center text-center" style={{ flexBasis: "40%" }}>
        {email}
      </div>

      <div className="pr-1" style={{ flexBasis: "15%" }}>
        <button className="w-full h-10 rounded-4 px-2 py-1 bg-green-600">
          <span className="flex justify-center items-center text-center">
            Approve
          </span>
        </button>
      </div>

      {/* Decline button */}
      <div className="pl-1" style={{ flexBasis: "15%" }}>
        <button className="w-full h-10 rounded-4 px-2 py-1 bg-red-600">
          <span className="flex justify-center items-center text-center">
            Decline
          </span>
        </button>
      </div>
    </div>
  );
};


const Dashboard = async () => {
  
  const { data, status } = await fetchUnVerifiedTeachers();

  if (!status || status == 401) redirect('/auth/signin');
  
  const unVerifiedTeachers:Teacher[] = data?.unverified_teachers || []

  return (
    <div className="bg-google-bw  visible absolute flex h-auto min-h-full w-full opacity-100 contain-style">
      <div
        className="relative bottom-0 left-0 right-0 top-0 z-auto block min-h-full 
        min-w-0 flex-1-auto "
      >
        <div className="h-full w-full px-10 pt-20">
          <div className="h-auto w-full bg-white rounded-4">
            <div className="w-full flex justify-center items-center pt-10">
              <h1 className="text-4xl font-bold text-slate-900">
                Requests for Teacher Role
              </h1>
            </div>
            <div className="p-10 h-full w-full">
              <div className="flex h-full w-full flex-col items-center">
                {unVerifiedTeachers.map((teacher, idx) => (
                  <UserRow key={idx} {...teacher} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
