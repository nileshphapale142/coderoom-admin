import React from "react";

const UserRow = ({ name, email }: { name: string; email: string }) => {
  return (
    <div
      className="font-base text-xl flex w-2/3 flex-wrap flex-row justify-between
    p-4 border rounded-4 border-gray my-1  cursor-default hover:bg-google-bw transition-all"
    >
      <div className="py-1 flex justify-center items-center text-center">
        {name}
      </div>
      <div className="py-1 flex justify-center items-center text-center">
        {email}
      </div>
      <div className="">
        <button className="w-30 h-10 rounded-4 px-2 py-1 bg-green-600">
          <span className="flex justify-center items-center text-center">
            Approve
          </span>
        </button>
      </div>
      <div className="">
        <button className="w-30 h-10 rounded-4 px-2 py-1 bg-red-600">
          <span className="flex justify-center items-center text-center">
            Decline
          </span>
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const users = [
    { name: "Nilesh Phapale", email: "202111063@diu.iiitvadodara.ac.in" },
    { name: "Nilesh Phapale", email: "202111063@diu.iiitvadodara.ac.in" },
    { name: "Nilesh Phapale", email: "202111063@diu.iiitvadodara.ac.in" },
    
  ];

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
                {users.map((user, idx) => (
                  <UserRow key={idx} {...user} />
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
