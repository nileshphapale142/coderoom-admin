import axios from "axios";
import { env } from "process";

export const backendApi = axios.create({
  baseURL: env?.BACKEND_API_URL, 
  withCredentials: true
});