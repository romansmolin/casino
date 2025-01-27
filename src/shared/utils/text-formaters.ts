function formatFeature(feature: string): string {
	return feature
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}

function formatCasinoType(type: string): string {
	return type
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}

const getUserFriendlyUrl = (name: string) => {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
};

export {
    formatCasinoType,
    formatFeature,
    getUserFriendlyUrl
}