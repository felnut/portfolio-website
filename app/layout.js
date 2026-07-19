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
	metadataBase: new URL('https://zyntax.kro.kr'),
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
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
