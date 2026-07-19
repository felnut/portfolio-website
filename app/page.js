import MainContent from './MainContent';

export const metadata = {
	title: 'FELNUT | 개발자 포트폴리오 - 프론트엔드・임베디드・DB',
	description: '안녕하세요! FELNUT의 자기소개 사이트입니다! 개발자 포트폴리오와 프로젝트를 확인해보세요.',
	keywords: ['FELNUT', 'felnut', '개발자', '포트폴리오', '자기소개', '웹개발', '프로그래밍'],
	authors: [{ name: 'FELNUT' }],
	alternates: {
		canonical: 'https://felnut.kro.kr'
	},
	openGraph: {
		title: 'FELNUT - 자기소개 사이트',
		description: '안녕하세요! FELNUT의 자기소개 사이트입니다! 개발자 포트폴리오와 프로젝트를 확인해보세요.',
		url: 'https://felnut.kro.kr',
		type: 'website',
		siteName: 'felnut',
		locale: 'ko_KR',
		images: [
			{
				url: 'https://felnut.kro.kr/preview.png',
				width: 600,
				height: 315,
				alt: 'felnut Preview'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'felnut - 자기소개 사이트',
		description: '안녕하세요! felnut의 자기소개 사이트입니다! 개발자 포트폴리오와 프로젝트를 확인해보세요.',
		images: ['https://felnut.kro.kr/preview.png']
	}
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'felnut',
	url: 'https://felnut.kro.kr',
	image: 'https://felnut.kro.kr/preview.png',
	description: '프론트엔드, 임베디드 시스템, 데이터베이스를 공부하는 개발자입니다.',
	sameAs: ['https://github.com/zyntax6760'],
	jobTitle: 'Developer',
	knowsAbout: ['Frontend Development', 'Embedded Systems', 'Database']
};

export default function HomePage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<MainContent />
		</>
	);
}
