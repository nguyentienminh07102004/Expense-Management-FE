'use client';
import { loginService } from "@/apis/UserService";
import { Button, Input } from "@mui/material";
import React from "react";

export default function LoginPageComponent() {
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	const LoginAPI = async () => {
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		console.log(emailRef.current?.value, passwordRef)
		if (!email || !password) {
			return;
		}
		
		await loginService(email, password);
	}
	return (
		<>
			<form className="flex flex-col justify-center items-center w-screen h-screen gap-5">
				<Input type="email" name="email" className="w-1/2 border border-white outline-none text-white" inputRef={emailRef} />
				<Input type="password" name="password" className="w-1/2 border border-white outline-none text-white" inputRef={passwordRef} />
				<Button variant="contained" className="w-1/2" onClick={LoginAPI}>Login</Button>
			</form>
		</>
	);
}
