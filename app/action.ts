"use server"

import { backendApi } from "@/api"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export const approveTeacher = async (teacherId: number) => {
  try {
    const cookie = cookies()
    const access_token = cookie.get('access_token')
    
    if (!access_token) {
      return {status: 401}
    } 
    
    const response = await backendApi.patch(`/admin/approve/teacher/${teacherId}`,{}, {
      headers: {
        Authorization: `Bearer ${access_token?.value}`
      }
    });
    
    const data = response.data
    
    return {status: 200}
    } catch(err:any) {
    console.log(err?.message)
    
    return {status: err?.response?.status}
  }
}

export const declineTeacher = async (teacherId: number) => {
  try {
    const cookie = cookies()
    const access_token = cookie.get('access_token')
    
    if (!access_token) {
      return {status: 401}
    } 
    
    const response = await backendApi.delete(`/admin/decline/teacher/${teacherId}`, {
      headers: {
        Authorization: `Bearer ${access_token?.value}`
      }
    });
    
    const data = response.data
    
    return {status: 200}
    } catch(err:any) {
    console.log(err?.message)
    
    return {status: err?.response?.status}
  }
}