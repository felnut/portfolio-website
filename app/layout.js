import { Inter } from 'next/font/google';
import Nav from '@/components/nav/Nav';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-inter',
	display: 'swap'
});

export const metadata = {
	metadataBase: new URL('https://felnut.kro.kr'),
	icons: {
		icon: '/imgs/small_logo.png'
	},
	robots: 'index, follow'
};

export const viewport = {
	themeColor: '#92400e'
};

export default function RootLayout({ children }) {
	return (
		<html lang="ko" className={inter.variable}>
			<head>
				<meta name="naver-site-verification" content="b2b312a7dfe81100d7893247fa9b6d29fda95084" />
				<meta name="google-site-verification" content="MBoj6hKvAKFle602kZORdUkT7hrYkKWearSyGvV67s4" />
			</head>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
