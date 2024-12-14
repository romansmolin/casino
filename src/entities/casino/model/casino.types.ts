interface CasinoEntry {
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

interface CasinoReview {
	name: string
	bonus_title: string
	logoUrl: string
	features: string[]
	rating: number
	review: StrapiContent
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