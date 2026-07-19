export default function Footer() {
	return (
		<div className="border-t border-slate-200 bg-white/60 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
			<p className="text-center text-sm text-slate-500 dark:text-gray-400">
				&copy; {new Date().getFullYear()} FELNUT. All rights reserved.
			</p>
		</div>
	);
}
