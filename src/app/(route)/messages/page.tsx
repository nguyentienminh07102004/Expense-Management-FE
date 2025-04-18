"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Grid from "@mui/material/Grid";
import SendMessageComponent from "../../../components/SendBox/SendBox";
import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default async function ChatComponent() {
	const cookieStorage = cookies();
	const token: string | undefined = cookieStorage.get("token")?.value;
	if (!token) {
		redirect("/login");
	}
	return (
		<>
			<Grid container spacing={2} className="mt-5">
				<Grid size={{ xs: 4 }}>
					<List
						sx={{
							width: "100%",
						}}
					>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<ImageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Photos"
								secondary="Jan 9, 2014"
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<WorkIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Work"
								secondary="Jan 7, 2014"
							/>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<BeachAccessIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Vacation"
								secondary="July 20, 2014"
							/>
						</ListItem>
					</List>
				</Grid>
				<Grid size={{ xs: 8 }}>
					<SendMessageComponent token={token} />
				</Grid>
			</Grid>
		</>
	);
}
