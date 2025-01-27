interface CasinoTopEntry {
	rating: number;
	title: string;
	main_bonus_title: string;
	hasRegularOffers: boolean;
	hasLiveCasino: boolean;
	hasVIPProgram: boolean;
	hasLiveChat: boolean;
	logo: string;
	casino: string;
	__typename: string;
}

interface Casino {
	name: string
	bonus_title: string
	logoUrl: string
	features: string[]
	rating: number
	mainBonus: CasinoMainBonus
	casinoType: CasinoType[]
	uuid: string
}

interface CasinoReview extends Casino {
	review: StrapiContent[]
	faq: CasinoReviewFaq[]
}

type CasinoMainBonus = {
	bonusLink: string
	info: StrapiContent[]
}

type CasinoReviewFaq = {
	text: string
	label: string	
}

type StrapiContentItem = {
	type: string;
	text: string;
	bold: boolean;
}

type StrapiContent = {
	type: string;
	children: StrapiContentItem[];
}

type CasinoType = "sportsbook" | "fresh-casino" |"crypto-casino"| "pay-n-play"