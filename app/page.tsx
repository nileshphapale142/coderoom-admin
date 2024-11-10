import { redirect } from "next/navigation";
import { UserRow } from "@/components/User";
import { backendApi } from "@/api"
import { cookies } from "next/headers"


interface Teacher {
  id: number;
  name: string;
  email: string;
}


const fetchUnVerifiedTeachers = async () => {
  try {
    const cookieStore = cookies()
    const access_token = cookieStore.get('access_token');
    
    if (!access_token) {
      return {
        data: null, status: null
      }
    }
    
    const res = await backendApi.get('/admin/getUnverifiedTeachers', {
      headers: {
        Authorization: `Bearer ${access_token?.value}`
      }
    });
    
    
   const data = res.data

    return {status: 200, data}
    
  } catch(err:any) {
    console.log(err?.message)
    return {
      status: err?.response?.status || -1,
      data: null      
    }
  }
}

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
                  {unVerifiedTeachers.length === 0 && 
                  <h1 className="text-xl font-normal">No pending requests!!!</h1>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard