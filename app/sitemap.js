const siteUrl = 'https://zyntax.kro.kr';

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
