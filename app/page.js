import MainContent from './MainContent';

export const metadata = {
	title: 'FELNUT | 프론트엔드 · 임베디드 개발자 포트폴리오',
	description: 'FELNUT의 개발자 포트폴리오입니다. 프론트엔드, 임베디드 시스템, 데이터베이스를 공부하며 제작한 다양한 프로젝트와 기술을 소개합니다.',
	keywords: ['FELNUT', '개발자 포트폴리오', '프론트엔드 개발자', '임베디드 시스템', '웹 개발', '프로그래밍', '데이터베이스'],
	authors: [{ name: 'FELNUT' }],
	alternates: {
		canonical: 'https://felnut.kro.kr/'
	},
	openGraph: {
		title: 'FELNUT | 프론트엔드 · 임베디드 개발자 포트폴리오',
		description:
			'FELNUT의 개발자 포트폴리오입니다. 프론트엔드, 임베디드 시스템, 데이터베이스를 공부하며 제작한 다양한 프로젝트와 기술을 소개합니다.',
		url: 'https://felnut.kro.kr/',
		type: 'website',
		siteName: 'FELNUT',
		locale: 'ko_KR',
		images: [
			{
				url: 'https://felnut.kro.kr/preview.png',
				width: 1200,
				height: 630,
				alt: 'FELNUT 프론트엔드 및 임베디드 개발자 포트폴리오 미리보기'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'FELNUT | 프론트엔드 · 임베디드 개발자 포트폴리오',
		description:
			'FELNUT의 개발자 포트폴리오입니다. 프론트엔드, 임베디드 시스템, 데이터베이스를 공부하며 제작한 다양한 프로젝트와 기술을 소개합니다.',
		images: ['https://felnut.kro.kr/preview.png']
	}
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'FELNUT',
	url: 'https://felnut.kro.kr/',
	image: 'https://felnut.kro.kr/preview.png',
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
};

export default function HomePage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<MainContent />
		</>
	);
}
