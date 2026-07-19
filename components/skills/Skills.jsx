import { IdCard, Code2, Cpu, Database } from 'lucide-react';

const skills = [
	{
		title: 'Frontend',
		icon: Code2,
		iconClassName: 'from-amber-400 via-amber-500 to-orange-400',
		shadowClassName: 'shadow-amber-500/30',
		hoverClassName: 'hover:border-amber-400/50 dark:hover:border-amber-400/40',
		items: ['HTML/CSS', 'JavaScript']
	},
	{
		title: 'Programming',
		icon: Cpu,
		iconClassName: 'from-orange-400 via-orange-500 to-amber-600',
		shadowClassName: 'shadow-orange-500/30',
		hoverClassName: 'hover:border-orange-400/50 dark:hover:border-orange-400/40',
		items: ['Python', 'Java', 'C / C++']
	},
	{
		title: 'Database',
		icon: Database,
		iconClassName: 'from-orange-500 via-orange-600 to-orange-700',
		shadowClassName: 'shadow-orange-600/30',
		hoverClassName: 'hover:border-orange-500/50 dark:hover:border-orange-500/40',
		items: ['SQLite']
	},
	{
		title: '자격증',
		icon: IdCard,
		iconClassName: 'from-amber-600 via-orange-700 to-amber-800',
		shadowClassName: 'shadow-orange-700/30',
		hoverClassName: 'hover:border-orange-500/50 dark:hover:border-orange-500/40',
		items: ['프로그래밍 기능사']
	}
];

export default function Skills() {
	return (
		<section id="skills" aria-labelledby="skills-title" className="py-24 md:py-32">
			<div className="mx-auto max-w-5xl px-4">
				<p
					aria-hidden="true"
					className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400"
				>
					What I Use
				</p>

				<h2
					id="skills-title"
					className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white"
				>
					Skills
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					{skills.map((skill) => {
						const Icon = skill.icon;

						return (
							<article
								key={skill.title}
								className={`group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-white/5 dark:shadow-none ${skill.hoverClassName}`}
							>
								<div
									aria-hidden="true"
									className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${skill.iconClassName} text-white shadow-md ${skill.shadowClassName}`}
								>
									<Icon className="h-6 w-6" />
								</div>

								<h3 className="mb-3 text-xl font-bold dark:text-white">{skill.title}</h3>

								<ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-gray-200">
									{skill.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
