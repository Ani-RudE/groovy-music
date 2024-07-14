import axios from "axios";

export const client = axios.create({
	baseURL: process.env.GROOVY_PUBLIC_API_BASE_URL,
});