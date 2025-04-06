import { Client } from "@stomp/stompjs";

export const client = new Client({
	brokerURL: "http://localhost:8080/api/v1/ws",
});