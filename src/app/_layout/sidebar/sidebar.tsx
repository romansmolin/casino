"use client"

import * as React from "react"
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
} from "lucide-react"


import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/shared/ui/sidebar"
import { SidebarBonusesMenu } from "./sidebar-bonuses-menu"

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveform,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: Command,
			plan: "Free",
		},
	],
	bonuses: [
		{
			title: "No Deposit Bonuses",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					icon: SquareTerminal,
					title: "Free Spins Bonuses",
					url: "#",
				},
				{
					title: "Free Cash Bonuses",
					url: "#",
				},
				{
					title: "0 Wager Bonuse",
					url: "#",
				},
			],
		},
		{
			title: "Real Money Bonuses",
			url: "#",
			icon: Bot,
			isActive: true,
			items: [
				{
					title: "Welcome Bonuses",
					url: "#",
				},
				{
					title: "Cashback Bonuses",
					url: "#",
				},
				{
					title: "Crypto Bonuses",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				{/* <TeamSwitcher teams={data.teams} /> */}
			</SidebarHeader>
			<SidebarContent>
				<SidebarBonusesMenu items={data.bonuses}/>
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				{/* <NavUser user={data.user} /> */}
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
