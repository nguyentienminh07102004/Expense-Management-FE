import SiderComponent from "@/components/Side/SiderComponent";
import { Container } from "@mui/material";
import React from "react";

export default async function Layout({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<>
			<Container maxWidth="lg">
				<SiderComponent />
				{children}
			</Container>
		</>
	);
}
