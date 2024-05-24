export type Result = {
	label: string;
	score: number;
	description: string;
	image: string | any;
	preventions: Prevention[] | null;
};

export type Prevention = {
	title: string;
	description: string;
};

export const getResult = (label: string, score: number, image: string | null): Result => {
	console.log('label:', label);
	const preventions = preventionList[label];
	console.log('preventions:', preventions);

	const result = {
		label: labels[label],
		score,
		description: descriptions[label],
		image,
		preventions
	};
	console.log(result);
	return result;
};

export const labels = {
	anthracnose: 'Anthracnose',
	'powdery-mildew': 'Powdery Mildew',
	'bacterial-canker': 'Bacterial Canker',
	'sooty-mold': 'Sooty Mold',
	'gall-midge': 'Gall Midge',
	'die-back': 'Dieback',
	healthy: 'Healthy'
};

export const descriptions = {
	anthracnose:
		'Anthracnose is a fungal disease that affects a wide range of plants, including mango trees. It is caused by various species of Colletotrichum fungi and is characterized by dark, sunken lesions on leaves, stems, and fruit. Anthracnose can lead to defoliation, fruit rot, and overall decline in tree health. The disease thrives in warm, humid conditions and can spread rapidly during periods of high rainfall. Proper management practices, including sanitation, pruning, and fungicide applications, can help prevent and control anthracnose in mango trees.',
	'powdery-mildew':
		'Powdery mildew is a common fungal disease that affects a wide range of plants, including mango trees. It is caused by various species of powdery mildew fungi, such as Oidium mangiferae, and is characterized by a white, powdery growth on leaves, stems, and fruit. Powdery mildew can lead to reduced photosynthesis, stunted growth, and premature leaf drop in mango trees. The disease thrives in warm, humid conditions with poor air circulation. Proper management practices, including pruning, fungicide applications, and cultural controls, can help prevent and control powdery mildew in mango trees.',
	'bacterial-canker':
		'Bacterial canker is a destructive disease that affects a wide range of plants, including mango trees. It is caused by the bacterium Xanthomonas campestris pv. mangiferae and is characterized by cankers, leaf spots, and fruit lesions. Bacterial canker can lead to wilting, dieback, and fruit rot in mango trees. The disease thrives in warm, humid conditions and can spread rapidly through rain splash and contaminated tools. Proper management practices, including sanitation, pruning, and chemical control, can help prevent and control bacterial canker in mango trees.',
	'sooty-mold':
		'Sooty mold is a fungal disease that affects a wide range of plants, including mango trees. It is caused by various species of fungi, such as Capnodium spp., and is characterized by a black, sooty growth on leaves, stems, and fruit. Sooty mold does not infect plant tissue directly but grows on the sugary excretions (honeydew) produced by sucking insects like aphids and scale insects. The disease can lead to reduced photosynthesis, stunted growth, and aesthetic damage in mango trees. Proper management practices, including controlling insect pests, pruning, and promoting air circulation, can help prevent and control sooty mold in mango trees.',
	'gall-midge':
		'Gall midge is a common pest that affects mango trees, causing distorted growth and gall formation on young shoots. The larvae of gall midges feed on plant tissue, leading to the formation of galls that can disrupt normal growth and development. Gall midge infestations can result in reduced fruit production and overall tree health. Proper management practices, including pruning, sanitation, and monitoring, can help prevent and control gall midge infestations in mango trees.',
	'die-back':
		'Dieback is a fungal disease that affects a wide range of plants, including mango trees. It is caused by various species of fungi, such as Botryosphaeria spp., and is characterized by wilting, dieback of branches, and black discoloration of wood. Dieback can lead to reduced fruit production, tree decline, and eventual death if left unmanaged. The disease thrives in warm, humid conditions and can spread through wounds and pruning cuts. Proper management practices, including pruning, sanitation, and chemical control, can help prevent and control dieback in mango trees.',
	healthy:
		'Your mango tree appears to be healthy! Continue to provide proper care, including watering, fertilizing, and pest management, to maintain its health and vigor. Regular monitoring and timely intervention can help prevent the development of diseases and ensure optimal growth and fruit production.'
};

const anthracnose: Prevention[] = [
	{
		title: 'Sanitation',
		description:
			'Remove and destroy infected plant debris, as the fungus can overwinter on fallen leaves and fruit.'
	},
	{
		title: 'Pruning',
		description:
			'Properly prune trees to improve airflow and reduce humidity, which creates less favorable conditions for the fungus.'
	},
	{
		title: 'Fungicides',
		description:
			"Apply fungicides according to the manufacturer's instructions, especially during periods of high humidity and rainfall."
	},
	{
		title: 'Avoid Overhead Irrigation',
		description:
			'Water the base of the tree to keep foliage dry, as wet leaves promote fungal growth.'
	},
	{
		title: 'Crop Rotation',
		description:
			'If possible, avoid planting mango trees in the same location where infected plants have been previously grown.'
	},
	{
		title: 'Healthy Practices',
		description:
			'Maintain overall tree health through proper fertilization, watering, and pest management to reduce susceptibility to disease.'
	}
];

const powderyMildew: Prevention[] = [
	{
		title: 'Pruning',
		description:
			'Proper pruning to improve air circulation and reduce humidity around the mango tree.'
	},
	{
		title: 'Watering',
		description:
			'Avoid overhead irrigation to keep foliage dry and prevent conditions favorable for fungal growth.'
	},
	{
		title: 'Fungicides',
		description:
			'Apply fungicides specifically labeled for powdery mildew control, following recommended application rates and schedules.'
	},
	{
		title: 'Sanitation',
		description: 'Remove and destroy infected plant parts to prevent the spread of the disease.'
	},
	{
		title: 'Planting Location',
		description: 'Choose a location with good sunlight exposure and proper air circulation.'
	},
	{
		title: 'Resistant Varieties',
		description:
			'Consider planting mango varieties that are resistant to powdery mildew if available.'
	},
	{
		title: 'Avoid Nitrogen Excess',
		description:
			'Moderate nitrogen fertilization to prevent excessive succulent growth, which is more susceptible to powdery mildew infection.'
	},
	{
		title: 'Monitoring',
		description:
			'Regularly inspect mango trees for early signs of powdery mildew and take prompt action if detected.'
	}
];

const bacterialCanker: Prevention[] = [
	{
		title: 'Sanitation',
		description:
			'Maintain good orchard hygiene by removing and destroying infected plant material, including diseased branches and fruit.'
	},
	{
		title: 'Pruning',
		description:
			'Prune trees regularly to improve air circulation and sunlight penetration, which can reduce humidity and create an unfavorable environment for bacterial growth.'
	},
	{
		title: 'Water Management',
		description:
			'Avoid overwatering and minimize water stress to prevent wounds and create conditions less favorable for bacterial infection.'
	},
	{
		title: 'Nutrition',
		description:
			'Ensure proper nutrition for mango trees to maintain their overall health and resilience against diseases.'
	},
	{
		title: 'Biological Control',
		description:
			'Use beneficial microorganisms or biological agents that antagonize or compete with the pathogen to suppress bacterial populations.'
	},
	{
		title: 'Chemical Control',
		description:
			'Apply copper-based fungicides or bactericides as preventive measures, following label instructions and recommended application schedules.'
	},
	{
		title: 'Quarantine',
		description:
			'Implement measures to prevent the introduction of infected plant material into orchards, including proper sanitation of tools and equipment.'
	},
	{
		title: 'Resistant Varieties',
		description:
			'Plant mango varieties that are less susceptible to bacterial canker disease, if available.'
	},
	{
		title: 'Monitoring',
		description:
			'Regularly monitor orchards for signs of bacterial canker disease and take prompt action if symptoms are detected.'
	},
	{
		title: 'Integrated Pest Management (IPM)',
		description:
			'Implement an integrated approach that combines multiple control strategies to manage bacterial canker disease effectively while minimizing environmental impact and reducing reliance on chemical treatments.'
	}
];

const sootyMold: Prevention[] = [
	{
		title: 'Control Insect Pests',
		description:
			'Manage populations of sucking insects such as aphids, scale insects, and whiteflies, which excrete honeydew that serves as a substrate for sooty mold growth. Use appropriate insecticides or biological control methods to keep pest populations in check.'
	},
	{
		title: 'Prune Infested Branches',
		description:
			'Regularly inspect mango trees for signs of insect infestation, including honeydew and black sooty mold growth. Prune and remove infested branches to eliminate the source of honeydew and reduce the spread of sooty mold.'
	},
	{
		title: 'Promote Air Circulation',
		description:
			'Maintain proper spacing between mango trees and ensure adequate airflow within the canopy to reduce humidity and moisture levels, which create favorable conditions for sooty mold growth. Prune trees as needed to improve ventilation and sunlight penetration.'
	},
	{
		title: 'Control Ants',
		description:
			'Ants are attracted to honeydew produced by sucking insects and may protect them from predators and parasites. Use ant baits or barriers to prevent ants from accessing mango trees and tending to insect pests.'
	},
	{
		title: 'Improve Tree Health',
		description:
			'Provide optimal nutrition and irrigation to mango trees to promote overall health and vigor, making them less susceptible to insect infestations and fungal diseases like sooty mold. Maintain proper soil pH and fertility levels.'
	},
	{
		title: 'Remove Sooty Mold Deposits',
		description:
			'Periodically wash sooty mold deposits off mango leaves and fruit using a gentle stream of water or a mild detergent solution. This helps improve the aesthetic appearance of the fruit and reduces the severity of sooty mold.'
	},
	{
		title: 'Use Horticultural Oils',
		description:
			'Apply horticultural oils to mango trees during the dormant season or before flowering to suffocate overwintering insects and their eggs, reducing the likelihood of sooty mold infestation in the following growing season.'
	},
	{
		title: 'Monitor and Scout',
		description:
			'Regularly monitor mango trees for signs of insect pests and sooty mold disease, especially during periods of high insect activity or environmental stress. Early detection allows for timely intervention and management.'
	}
];

const gallMidge: Prevention[] = [
	{
		title: 'Pruning',
		description:
			'Remove and destroy galled shoots and infested plant parts to reduce the population of gall midge larvae. Pruning should be done carefully to prevent spreading the infestation to other parts of the tree.'
	},
	{
		title: 'Sanitation',
		description:
			'Maintain good orchard hygiene by removing fallen leaves, fruits, and other plant debris, as they can serve as breeding sites for gall midges. Dispose of infested plant material properly to prevent re-infestation.'
	},
	{
		title: 'Monitoring',
		description:
			'Regularly inspect mango trees for signs of gall midge infestation, such as gall formation on young shoots and distorted growth. Early detection allows for prompt intervention to prevent further damage.'
	},
	{
		title: 'Biological Control',
		description:
			'Consider introducing natural enemies of gall midges, such as predatory insects or parasitic wasps, to help control their population. This approach may help reduce gall midge numbers over time.'
	},
	{
		title: 'Chemical Control',
		description:
			'If infestation levels are severe and other control measures are ineffective, you may consider using insecticides containing active ingredients such as neem oil or spinosad to target adult gall midges. However, chemical control should be used judiciously and in accordance with recommended guidelines to minimize environmental impact and preserve beneficial insects.'
	},
	{
		title: 'Resistant Varieties',
		description:
			'Planting mango varieties that are known to exhibit resistance or tolerance to gall midge infestation may help reduce the severity of the disease. Consult with local agricultural experts or nurseries for suitable resistant varieties.'
	}
];

const dieBack: Prevention[] = [
	{
		title: 'Pruning',
		description:
			'Regularly prune mango trees to remove dead or diseased branches, promoting airflow and reducing the risk of fungal infection.'
	},
	{
		title: 'Sanitation',
		description:
			'Remove and destroy any infected plant material, including dead wood and fallen leaves, to prevent the spread of the fungus within the orchard.'
	},
	{
		title: 'Water Management',
		description:
			'Avoid overwatering and ensure proper drainage to prevent waterlogged soil conditions, which can exacerbate fungal infections.'
	},
	{
		title: 'Nutrition',
		description:
			'Maintain optimal soil fertility and provide balanced nutrition to mango trees to promote overall health and resilience against diseases.'
	},
	{
		title: 'Avoid Wounding',
		description:
			'Minimize mechanical damage to mango trees during cultivation and harvesting to reduce entry points for fungal pathogens.'
	},
	{
		title: 'Chemical Control',
		description:
			'Apply fungicides containing active ingredients such as copper or systemic fungicides according to recommended guidelines and timing to prevent or suppress fungal growth.'
	},
	{
		title: 'Resistant Varieties',
		description:
			'Plant mango varieties that are less susceptible to dieback disease, if available, to reduce the risk of infection.'
	},
	{
		title: 'Quarantine',
		description:
			'Implement measures to prevent the introduction of infected plant material into orchards, including proper sanitation of tools and equipment.'
	},
	{
		title: 'Monitoring',
		description:
			'Regularly monitor mango trees for symptoms of dieback disease, such as wilting, dieback of branches, and black discoloration, and take prompt action if detected.'
	}
];

const preventionList = {
	anthracnose: anthracnose,
	'powdery-mildew': powderyMildew,
	'bacterial-canker': bacterialCanker,
	'sooty-mold': sootyMold,
	'gall-midge': gallMidge,
	'die-back': dieBack,
	healthy: null
};
