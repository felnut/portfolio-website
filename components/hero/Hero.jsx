'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Hero() {
	const isMobileDevice = useIsMobile(786);

	return (
		<section
			id="home"
			aria-labelledby="hero-title"
			className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-linear-to-b dark:from-white dark:via-white dark:via-65% dark:to-slate-950"
		>
			<div className="mx-auto mt-15 max-w-4xl text-center">
				{/* FELNUT 로고 */}
				<Image
					src="/imgs/logo.png"
					alt="FELNUT 개발자 포트폴리오 로고"
					width={1560}
					height={878}
					priority
					sizes="(max-width: 768px) 100vw, 576px"
					className="mx-auto h-auto w-full max-w-xl object-contain"
				/>

				{/* 페이지의 대표 제목 */}
				<h1 id="hero-title" className="mt-6 text-lg font-medium text-slate-600 md:text-xl">
					<span className="sr-only">FELNUT, </span>
					프론트엔드 · 임베디드 시스템 · 데이터베이스를 공부하는{' '}
					<span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text font-bold text-transparent">
						개발자
					</span>
					입니다.
				</h1>

				{/* 주요 페이지 이동 */}
				<nav
					aria-label="주요 콘텐츠 바로가기"
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					<a
						href="#projects"
						className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none"
					>
						프로젝트 보기
						<ArrowRight aria-hidden="true" className="h-4 w-4" />
					</a>

					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors duration-300 hover:border-amber-500 hover:text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-600 dark:text-slate-200"
					>
						연락하기
					</a>
				</nav>

				{/* 소개 섹션으로 이동 */}
				<div className="relative mt-16 flex justify-center">
					<a
						href="#about"
						aria-label="소개 섹션으로 이동"
						className="rounded-full focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 focus-visible:outline-none"
					>
						<Image
							src="/imgs/mouse-cursor.svg"
							alt=""
							aria-hidden="true"
							width={56}
							height={56}
							className={`h-14 w-14 opacity-60 transition duration-300 ease-out dark:invert ${
								isMobileDevice ? 'active:translate-y-2' : 'hover:translate-y-2 hover:opacity-100'
							}`}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
