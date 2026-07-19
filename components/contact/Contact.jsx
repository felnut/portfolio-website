'use client';

import { Github, Mail } from 'lucide-react';
import { useEmailLink } from '@/hooks/useEmailLink';

export default function Contact() {
	const emailLink = useEmailLink();

	return (
		<div id="contact" className="pt-24 pb-24 md:pt-32">
			<div className="mx-auto max-w-4xl px-4">
				<p className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
					Get In Touch
				</p>
				<h2 className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white">Contact</h2>
				<div className="flex flex-wrap items-center justify-center gap-4">
					<a
						href={emailLink}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<Mail className="h-5 w-5" />
						Email
					</a>
					<a
						href="https://github.com/felnut"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<Github className="h-5 w-5" />
						GitHub
					</a>
					<a
						href="https://discord.com/users/901664081801535489"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:shadow-none dark:hover:border-amber-400/40 dark:hover:text-amber-400"
					>
						<img src="/imgs/discord.svg" alt="" width={20} height={20} className="h-5 w-5 dark:invert" />
						Discord
					</a>
				</div>
			</div>
		</div>
	);
}
