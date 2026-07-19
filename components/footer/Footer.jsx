import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-white/60 py-14 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900">
			<p className="mt-3 text-center text-sm text-slate-500 dark:text-gray-400">
				&copy; {new Date().getFullYear()} FELNUT. All rights reserved.
			</p>
		</footer>
	);
}
