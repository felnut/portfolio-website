export default function BackgroundDecor() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/20"></div>
			<div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/20"></div>
			<div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-300/10 blur-3xl dark:bg-pink-400/10"></div>
		</div>
	);
}
