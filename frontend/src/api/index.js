import axios from "axios";

export const client = axios.create({
     // baseURL: import.meta.env.NEXT_PUBLIC_GROOVY_PUBLIC_API_BASE_URL,
     baseURL: "https://beatbox-music-backend.vercel.app/api/",
});