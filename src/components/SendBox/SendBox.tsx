/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { client } from "@/common/Configuration/WebSocket";
import SendIcon from "@mui/icons-material/Send";
import { TextareaAutosize } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import React from "react";

export default function SendMessageComponent({ token }: { token: string }) {
	const [message, setMessage] = React.useState<string>("");
	const { sub } = jwtDecode(token);
	const sendMessage = () => {
		if (message === '') {
			return;
		}
		client.publish({
			destination: "/app/send-message",
			body: JSON.stringify({
				message: message,
				receiver: `${
					sub === "nguyentienminhntm07102004@gmail.com"
						? "nguyentienminh07102004@gmail.com"
						: "nguyentienminhntm07102004@gmail.com"
				}`,
			}),
		});
		setMessage("");
	};
	React.useEffect(() => {
		client.connectHeaders = { Authorization: token };
		client.onConnect = () => {
			client.subscribe(
				`/user/${sub}/queue/receive-message`,
				(message) => {
					alert(JSON.parse(message.body).message);
				}
			);
		};
		client.activate();
	}, []);
	return (
		<>
			<div className="flex justify-center items-center fixed bottom-10 right-10 gap-3">
				<TextareaAutosize
					placeholder="Enter your message..."
					color="primary"
					className="text-white w-72 bg-black"
					onChange={(evt) => setMessage(evt.target.value)}
					value={message}
					onKeyDown={(evt) => {
						if (evt.key === "Enter") {
							sendMessage();
						}
					}}
				/>
				<SendIcon
					className="cursor-pointer"
					onClick={() => sendMessage()}
				/>
			</div>
		</>
	);
}
