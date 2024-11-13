"use client"
import { approveTeacher, declineTeacher } from "@/app/action";
import { useRouter } from "next/navigation";
import { SimpleButton } from "../Buttons";

interface Teacher {
  id: number;
  name: string;
  email: string;
}


export const UserRow = ({ name, email, id }: Teacher ) => {

  const router = useRouter();

  const onApproveClick = async () => {
    const { status } = await approveTeacher(id);

    if (status === 200) router.refresh();
    else if (status === 401) router.push('/auth/signin');
    else if (status === 500) alert('Server error');
    else if (status === 504) alert('Timeout');
    else alert('Unkown Problem');
  }
  
  const onDeclineClick = async () => {
    const { status } =  await declineTeacher(id);
    
    if (status === 200) router.refresh();
    else if (status === 401) router.push('/auth/signin');
    else if (status === 500) alert('Server error');
    else if (status === 504) alert('Timeout');
    else alert('Unkown Problem');
  }

  return (
    <div
      className="font-base text-xl flex w-[80%] flex-wrap flex-row justify-between p-4 border rounded-4 border-gray my-1 cursor-default hover:bg-google-bw transition-all"
    >
      <div className="py-1 flex justify-start items-center text-center" style={{ flexBasis: "30%" }}>
        {name}
      </div>

      <div className="py-1 flex justify-start items-center text-center" style={{ flexBasis: "40%" }}>
        {email}
      </div>

      <div className="pr-1" style={{ flexBasis: "15%" }}>
        <SimpleButton name="Approve" bgColor="bg-green-600" onClick={onApproveClick}/>
      </div>

      <div className="pl-1" style={{ flexBasis: "15%" }}>
        <SimpleButton name="Decline" bgColor="bg-red-600" onClick={onDeclineClick}/>
      </div>
    </div>
  );
};
