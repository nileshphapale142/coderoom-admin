"use server"

import { backendApi } from "@/api"
import { cookies } from "next/headers"


export const fetchUnVerifiedTeachers = async () => {
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