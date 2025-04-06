"use server"
import SendMessageComponent from "@/components/SendBox/SendBox";
import { Box } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ChatComponent() {
	const cookieStorage = cookies();
	const token: string | undefined = cookieStorage.get("token")?.value;
	if (!token) {
		redirect("/login");
	}
	return (
		<>
			<Box></Box>
			<div className="relative">
				<SendMessageComponent token={token} />
			</div>
		</>
	);
}
