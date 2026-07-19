import { IdCard, Code2, Cpu, Database } from 'lucide-react';

export default function Skills() {
	return (
		<div id="skills" className="py-24 md:py-32">
			<div className="mx-auto max-w-5xl px-4">
				<p className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
					What I Use
				</p>
				<h2 className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white">Skills</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400 text-white shadow-md shadow-amber-500/30">
							<Code2 className="h-6 w-6" />
						</div>
						<h3 className="mb-3 text-xl font-bold dark:text-white">Frontend</h3>
						<ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-gray-200">
							<li>HTML/CSS</li>
							<li>JavaScript</li>
						</ul>
					</div>
					<div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-orange-400/40">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/30">
							<Cpu className="h-6 w-6" />
						</div>
						<h3 className="mb-3 text-xl font-bold dark:text-white">Coding</h3>
						<ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-gray-200">
							<li>Python</li>
							<li>Java</li>
							<li>C / C++</li>
						</ul>
					</div>
					<div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/30">
							<Database className="h-6 w-6" />
						</div>
						<h3 className="mb-3 text-xl font-bold dark:text-white">Database</h3>
						<ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-gray-200">
							<li>SQLite</li>
						</ul>
					</div>
					<div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/30">
							<IdCard className="h-6 w-6" />
						</div>
						<h3 className="mb-3 text-xl font-bold dark:text-white">License</h3>
						<ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-gray-200">
							<li>프로그래밍 기능사</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
