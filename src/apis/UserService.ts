'use server'
import { instance } from "@/apis/Configuration"
import { APIResponse } from "@/types/APIResponse";
import { JwtResponse } from "@/types/Jwt";
import { AxiosResponse } from "axios"
import { cookies } from "next/headers";

export const loginService = async (email: string, password: string) => {
	const res: AxiosResponse<APIResponse<JwtResponse>> = (await instance.post('/users/login', { email, password }));
	const { token, expires, expiresRefreshToken, refreshToken } = res.data.data;
	const cookieStorage = cookies();
	cookieStorage.set('token', token, { expires: new Date(expires) });
	cookieStorage.set('refresh_token', refreshToken, { expires: new Date(expiresRefreshToken) })
}