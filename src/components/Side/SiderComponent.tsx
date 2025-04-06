"use client";
import {
	createTheme,
	Drawer,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ThemeProvider,
} from "@mui/material";
import {} from "@mui/material/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import React from "react";

export default function SiderComponent() {
	const [open, setOpen] = React.useState<boolean>(true);
	const pathName = usePathname();
	const siderNames = ["Dashboard", "Messages"];
	const siderIcons = [DashboardIcon, MessageIcon];
	const theme = createTheme({
		palette: {
			primary: {
				dark: "#000000",
				main: "#000000",
			},
		},
		components: {
			MuiDrawer: {
				styleOverrides: {},
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<Drawer
					open={open}
					onClose={() => setOpen(false)}
					anchor="left"
				>
					<List>
						{siderNames.map((item, index) => (
							<Link href={"/" + item.toLowerCase()} key={index}>
								<ListItemButton
									selected={
										pathName === `/${item.toLowerCase()}`
									}
								>
									<ListItemIcon>
										{React.createElement(siderIcons[index])}
									</ListItemIcon>
									<ListItemText primary={item} />
								</ListItemButton>
							</Link>
						))}
					</List>
				</Drawer>
			</ThemeProvider>
		</>
	);
}
