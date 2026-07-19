'use client';

import Image from 'next/image';
import { Github, Mail } from 'lucide-react';
import { useEmailLink } from '@/hooks/useEmailLink';

export default function Contact() {
	const emailLink = useEmailLink();

	return (
		<section id="contact" aria-labelledby="contact-title" className="pt-24 pb-24 md:pt-32">
			<div className="mx-auto max-w-4xl px-4">
				<p className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
					Get In Touch
				</p>

				<h2
					id="contact-title"
					className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white"
				>
					Contact
				</h2>

				<nav
					aria-label="연락 및 소셜 미디어 링크"
					className="flex flex-wrap items-center justify-center gap-4"
				>
					<a
						href={emailLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="FELNUT에게 이메일 보내기"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<Mail aria-hidden="true" className="h-5 w-5" />
						Email
					</a>

					<a
						href="https://github.com/felnut"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="FELNUT GitHub 프로필 열기"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<Github aria-hidden="true" className="h-5 w-5" />
						GitHub
					</a>

					<a
						href="https://discord.com/users/901664081801535489"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="FELNUT Discord 프로필 열기"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<Image
							src="/imgs/discord.svg"
							alt=""
							aria-hidden="true"
							width={20}
							height={20}
							className="h-5 w-5 dark:invert"
						/>
						Discord
					</a>
				</nav>
			</div>
		</section>
	);
}
