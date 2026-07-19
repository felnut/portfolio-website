const siteUrl = 'https://felnut.kro.kr';

export default function sitemap() {
	const lastModified = new Date();

	return [
		{
			url: siteUrl,
			lastModified,
			changeFrequency: 'weekly',
			priority: 1.0
		}
	];
}
