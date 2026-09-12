import MainContent from './MainContent';
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = 'https://www.felnut.com/';
const TITLE = 'FELNUT | 프론트엔드 · 임베디드 개발자 포트폴리오';
const DESCRIPTION =
	'FELNUT의 개발자 포트폴리오입니다. 프론트엔드, 임베디드 시스템, 데이터베이스를 공부하며 제작한 다양한 프로젝트와 기술을 소개합니다.';

export const metadata = {
	title: TITLE,
	description: DESCRIPTION,
	keywords: ['FELNUT', '개발자 포트폴리오', '프론트엔드 개발자', '임베디드 시스템', '웹 개발', '프로그래밍', '데이터베이스'],
	authors: [{ name: 'FELNUT' }],
	alternates: {
		canonical: SITE_URL
	},
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		url: SITE_URL,
		type: 'website',
		siteName: 'FELNUT',
		locale: 'ko_KR',
		images: [
			{
				url: `${SITE_URL}preview.png`,
				width: 1200,
				height: 630,
				alt: 'FELNUT 프론트엔드 및 임베디드 개발자 포트폴리오 미리보기'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: TITLE,
		description: DESCRIPTION,
		images: [`${SITE_URL}preview.png`]
	}
};

// Person, 그 개인이 만든 1인 브랜드/조직(Organization), 사이트(WebSite),
// 이 페이지 자체(WebPage)를 @id로 서로 연결해 선언한다. Organization은
// 실체 없는 회사를 지어내는 게 아니라 founder로 Person을 그대로 연결해
// "FELNUT"이 1인 개발자 브랜드임을 명시하는 용도다 — WebSite의 발행
// 주체(publisher)는 이 Organization이 맡는다.
const personId = `${SITE_URL}#person`;
const organizationId = `${SITE_URL}#organization`;
const websiteId = `${SITE_URL}#website`;
const webpageId = `${SITE_URL}#webpage`;

const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': personId,
			name: 'FELNUT',
			url: SITE_URL,
			image: `${SITE_URL}preview.png`,
			description:
				'프론트엔드, 임베디드 시스템, 데이터베이스를 공부하며 다양한 프로젝트를 개발하는 개발자입니다.',
			sameAs: ['https://github.com/felnut'],
			jobTitle: 'Developer',
			knowsAbout: [
				'Frontend Development',
				'Embedded Systems',
				'Database',
				'Web Development',
				'Programming'
			]
		},
		{
			'@type': 'Organization',
			'@id': organizationId,
			name: 'FELNUT',
			url: SITE_URL,
			logo: `${SITE_URL}imgs/small_logo.png`,
			founder: { '@id': personId },
			sameAs: ['https://github.com/felnut']
		},
		{
			'@type': 'WebSite',
			'@id': websiteId,
			url: SITE_URL,
			name: 'FELNUT',
			description: DESCRIPTION,
			inLanguage: 'ko-KR',
			publisher: { '@id': organizationId }
		},
		{
			'@type': 'WebPage',
			'@id': webpageId,
			url: SITE_URL,
			name: TITLE,
			description: DESCRIPTION,
			inLanguage: 'ko-KR',
			isPartOf: { '@id': websiteId },
			about: { '@id': personId },
			primaryImageOfPage: `${SITE_URL}preview.png`
		}
	]
};

export default function HomePage() {
	return (
		<>
			<Analytics/>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<MainContent />
		</>
	);
}
