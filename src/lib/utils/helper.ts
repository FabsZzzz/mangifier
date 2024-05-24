export function toDate(dateString: string) {
	try {
		const [month, day, year] = dateString.split('-').map((part) => parseInt(part, 10));
		return new Date(year, month - 1, day);
	} catch (error) {
		console.error(error);
		return null;
	}
}

export const labels = {
	anthracnose: 'Anthracnose',
	'powdery-mildew': 'Powdery Mildew',
	'bacterial-canker': 'Bacterial Canker',
	'sooty-mold': 'Sooty Mold',
	'gall-midge': 'Gall Midge',
	'die-back': 'Dieback',
	healthy: 'Healthy'
};

export function toPercentString(value: number) {
	return `${Math.round(value * 100 * 100) / 100}%`;
}
