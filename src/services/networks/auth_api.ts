import axiosClient from "@/src/services/networks/axios_client";
import { AuthResponse } from "@/src/types/auth_response";

export const authApi = {
    login: async (data: any) => {
        const response = await axiosClient.post<AuthResponse>("/auth/login", data);
        return response.data;
    },
    register: async (data: any) => {
        const response = await axiosClient.post<AuthResponse>("/auth/register", data);
        return response.data;
    },
};