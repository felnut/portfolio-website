'use client';

import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];
const sectionLabels = {
	home: '홈',
	about: '소개',
	skills: '능력',
	projects: '프로젝트',
	contact: '연락처'
};

function linkClass(activeSection, id) {
	const active = activeSection === id;
	return `transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 ${
		active
			? 'bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text font-semibold text-transparent dark:from-amber-400 dark:to-orange-400'
			: ''
	}`;
}

export default function Nav() {
	const mobile = useIsMobile(786);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		if (!mobile) {
			setMobileMenuOpen(false);
		}
	}, [mobile]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ root: null, threshold: 0.5 }
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	function toggleMobileMenu() {
		setMobileMenuOpen((open) => !open);
	}

	if (mobile) {
		return (
			<div className="fixed top-3 z-100 flex w-full justify-center px-4">
				<nav
					id="nav_shadow"
					className={`w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition-all duration-300 ease-in-out dark:border-white/10 dark:shadow-black/20 ${
						mobileMenuOpen ? 'bg-white/95 dark:bg-slate-900/90' : 'bg-white/80 dark:bg-slate-900/60'
					}`}
					style={{ height: mobileMenuOpen ? '300px' : '64px' }}
				>
					<div className="flex flex-col items-center justify-between p-4">
						<div className="flex w-full items-center justify-between">
							<a href="/#home" className="flex items-center gap-2">
								<Image
									src="/imgs/small_logo.png"
									alt="main logo"
									width={36}
									height={36}
									className="rounded-full"
								/>
							</a>
							<button
								onClick={toggleMobileMenu}
								className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
								aria-label="메뉴"
							>
								<span
									className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 dark:bg-white ${
										mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
									}`}
								></span>
								<span
									className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 dark:bg-white ${
										mobileMenuOpen ? 'opacity-0' : ''
									}`}
								></span>
								<span
									className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 dark:bg-white ${
										mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
									}`}
								></span>
							</button>
						</div>

						{mobileMenuOpen && (
							<ul className="mt-6 flex flex-col items-center gap-4 text-lg font-medium text-slate-800 dark:text-white">
								{sections.map((id) => (
									<li key={id}>
										<a
											href={`/#${id}`}
											onClick={toggleMobileMenu}
											className={linkClass(activeSection, id)}
										>
											{sectionLabels[id]}
										</a>
									</li>
								))}
							</ul>
						)}
					</div>
				</nav>
			</div>
		);
	}

	return (
		<div className="fixed top-3 z-50 flex w-full justify-center px-4">
			<nav
				id="nav_shadow"
				className="w-full max-w-2xl rounded-full border border-slate-200 bg-white/80 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20"
			>
				<div className="flex items-center justify-between px-6 py-3">
					<a href="/#home" className="shrink-0">
						<img
							src="/imgs/small_logo.png"
							alt="main logo"
							width={40}
							height={40}
							className="rounded-full"
						/>
					</a>
					<ul className="flex items-center gap-6 text-base font-medium text-slate-800 lg:gap-8 dark:text-white">
						{sections.map((id) => (
							<li key={id}>
								<a href={`/#${id}`} className={linkClass(activeSection, id)}>
									{sectionLabels[id]}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}
