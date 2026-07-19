'use client';

import { useState } from 'react';
import { Github } from 'lucide-react';
import { useToast } from '@/components/toast/ToastContext';

export default function Projects() {
	const { showToast } = useToast();

	const [showFirewall, setShowFirewall] = useState(false);
	const [showWeather, setShowWeather] = useState(false);
	const [showAir, setShowAir] = useState(false);

	function handlePreparingClick() {
		showToast('아직  링크가 준비되지 않았습니다!');
	}

	return (
		<div id="projects" className="py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-4">
				<p className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
					My Work
				</p>
				<h2 className="mb-14 text-center text-3xl font-bold md:text-4xl dark:text-white">Projects</h2>
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
					<div
						role="button"
						tabIndex={0}
						className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40"
						onMouseEnter={() => setShowFirewall(true)}
						onMouseLeave={() => setShowFirewall(false)}
						onFocus={() => setShowFirewall(true)}
						onBlur={() => setShowFirewall(false)}
					>
						<h3 className="mb-2 text-xl font-bold dark:text-white">🧱 방화벽 프로젝트</h3>
						{showFirewall && (
							<div className="mt-2 dark:text-white">
								<ul className="list-inside list-disc space-y-2 pl-5">
									<li className="ml-2 -indent-5">파이썬을 활용하여 방화벽의 원리를 알아보았습니다.</li>
								</ul>
							</div>
						)}
						<div className="mt-3">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-400">
								<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>완료
							</span>
						</div>
						<div className="mt-4 flex space-x-4">
							<a
								href="https://github.com/felnut/Firewall-Project"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 font-medium text-slate-700 duration-200 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400"
							>
								<Github className="h-4 w-4" />
								Github
							</a>
						</div>
					</div>
					<div
						role="button"
						tabIndex={0}
						className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40"
						onMouseEnter={() => setShowWeather(true)}
						onMouseLeave={() => setShowWeather(false)}
						onFocus={() => setShowWeather(true)}
						onBlur={() => setShowWeather(false)}
					>
						<h3 className="mb-2 text-xl font-bold dark:text-white">🌥️ 날씨 친구</h3>
						{showWeather && (
							<div className="mt-2 dark:text-white">
								<ul className="list-inside list-disc space-y-2 pl-5">
									<li className="ml-2 -indent-5">
										원하는 이미지를 날씨에 맞추어 넣으면, 날씨에 따라 이미지를 띄워줍니다.
									</li>
									<li>
										사용 API
										<ol className="mt-1 list-inside list-decimal space-y-1 pl-6">
											<li>OpenWeatherMap</li>
											<li>Kakao Map</li>
										</ol>
									</li>
								</ul>
							</div>
						)}
						<div className="mt-3">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-400">
								<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>완료
							</span>
						</div>
						<div className="mt-4 flex space-x-4">
							<a
								href="https://github.com/felnut/Weather-Mate"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 font-medium text-slate-700 duration-200 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400"
							>
								<Github className="h-4 w-4" />
								Github
							</a>
						</div>
					</div>
					<div
						role="button"
						tabIndex={0}
						className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-400/40"
						onMouseEnter={() => setShowAir(true)}
						onMouseLeave={() => setShowAir(false)}
						onFocus={() => setShowAir(true)}
						onBlur={() => setShowAir(false)}
					>
						<h3 className="mb-2 text-xl font-bold dark:text-white">🖼️ 액자형 공기청정기</h3>
						{showAir && (
							<div className="mt-2 dark:text-white">
								<ul className="list-inside list-disc space-y-2 pl-5">
									<li className="ml-2 -indent-5">액자식 공기청정기를 라즈베리파이로 제작하였습니다.</li>
									<li>
										특징
										<ol className="mt-1 list-inside list-decimal space-y-1 pl-6">
											<li>액자식 형태로 공간 차지 최소화</li>
											<li>디자인에 잘 어울리고 분위기 저하 감소</li>
										</ol>
									</li>
								</ul>
							</div>
						)}
						<div className="mt-3">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-400">
								<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>완료
							</span>
						</div>
						<div className="mt-4 flex space-x-4">
							<button
								className="inline-flex items-center gap-1.5 font-medium text-slate-500 transition-colors hover:cursor-pointer hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400"
								onClick={handlePreparingClick}
							>
								<Github className="h-4 w-4" />
								<a href="https://github.com/" target="_blank" rel="noreferrer">
									준비중
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
