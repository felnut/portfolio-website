'use client';

import { Github } from 'lucide-react';
import { useToast } from '@/components/toast/ToastContext';

const projects = [
	{
		title: '방화벽 프로젝트',
		emoji: '🧱',
		description: ['파이썬을 활용하여 방화벽의 원리를 알아보았습니다.'],
		status: '완료',
		githubUrl: 'https://github.com/felnut/Firewall-Project'
	},
	{
		title: '날씨 친구',
		emoji: '🌥️',
		description: ['원하는 이미지를 날씨에 맞추어 넣으면, 날씨에 따라 이미지를 띄워줍니다.'],
		details: {
			title: '사용 API',
			items: ['OpenWeatherMap', 'Kakao Map']
		},
		status: '완료',
		githubUrl: 'https://github.com/felnut/Weather-Mate'
	},
	{
		title: '액자형 공기청정기',
		emoji: '🖼️',
		description: ['액자식 공기청정기를 라즈베리파이로 제작하였습니다.'],
		details: {
			title: '특징',
			items: ['액자식 형태로 공간 차지 최소화', '디자인에 잘 어울리고 분위기 저하 감소']
		},
		status: '완료',
		githubUrl: null
	}
];

export default function Projects() {
	const { showToast } = useToast();

	function handlePreparingClick() {
		showToast('아직 GitHub 링크가 준비되지 않았습니다!');
	}

	return (
		<section id="projects" aria-labelledby="projects-title" className="py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-4">
				<p
					aria-hidden="true"
					className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400"
				>
					My Work
				</p>

				<h2
					id="projects-title"
					className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white"
				>
					Projects
				</h2>

				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 focus-within:-translate-y-2 focus-within:border-amber-400/50 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-xl md:overflow-visible dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:focus-within:border-amber-400/40 dark:hover:border-amber-400/40"
						>
							<h3 className="mb-2 text-xl font-bold dark:text-white">
								<span aria-hidden="true">{project.emoji} </span>
								{project.title}
							</h3>

							<div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-focus-within:mt-2 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 md:absolute md:inset-x-6 md:z-20 md:rounded-xl md:border md:border-slate-200 md:bg-white md:p-4 md:shadow-lg dark:md:border-white/10 dark:md:bg-slate-900">
								<div className="overflow-hidden">
									<ul className="list-inside list-disc space-y-2 text-slate-700 dark:text-gray-200">
										{project.description.map((description) => (
											<li key={description}>{description}</li>
										))}

										{project.details && (
											<li>
												{project.details.title}

												<ul className="mt-1 list-inside list-disc space-y-1 pl-4">
													{project.details.items.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</li>
										)}
									</ul>
								</div>
							</div>

							<div className="mt-3">
								<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-400">
									<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
									{project.status}
								</span>
							</div>

							<div className="mt-4">
								{project.githubUrl ? (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${project.title} GitHub 저장소 열기`}
										className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors duration-200 hover:text-amber-600 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none dark:text-gray-200 dark:hover:text-amber-400"
									>
										<Github aria-hidden="true" className="h-4 w-4" />
										GitHub
									</a>
								) : (
									<button
										type="button"
										onClick={handlePreparingClick}
										className="inline-flex items-center gap-1.5 font-medium text-slate-500 transition-colors hover:text-amber-600 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none dark:text-gray-400 dark:hover:text-amber-400"
									>
										<Github aria-hidden="true" className="h-4 w-4" />
										준비중
									</button>
								)}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
