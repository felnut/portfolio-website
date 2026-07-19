'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Hero() {
	const isMobileDevice = useIsMobile(786);

	return (
		<div
			id="home"
			className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-linear-to-b dark:from-white dark:via-white dark:via-65% dark:to-slate-950"
		>
			<div className="mx-auto mt-15 max-w-4xl text-center">
				<Image
					src="/imgs/logo.png"
					alt="FELNUT logo"
					width={1560}
					height={878}
					priority
					sizes="(max-width: 768px) 100vw, 576px"
					className="mx-auto h-auto w-full max-w-xl object-contain"
				/>
				<h1 className="mt-6 text-lg font-medium text-slate-600 md:text-xl">
					프론트엔드 &middot; 임베디드 시스템 &middot; 데이터베이스를 공부하는{' '}
					<span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text font-bold text-transparent">
						개발자
					</span>
					입니다.
				</h1>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<a
						href="#projects"
						className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition-transform duration-300 hover:scale-105"
					>
						프로젝트 보기
						<ArrowRight className="h-4 w-4" />
					</a>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors duration-300 hover:border-amber-500 hover:text-amber-600"
					>
						연락하기
					</a>
				</div>
				<div className="relative mt-16 flex justify-center">
					<a href="#about">
						<img
							src="/imgs/mouse-cursor.svg"
							alt="Scroll down"
							width={56}
							height={56}
							className={`h-14 w-14 transform opacity-60 transition duration-300 ease-out dark:invert ${
								isMobileDevice ? 'active:translate-y-2' : 'hover:translate-y-2 hover:opacity-100'
							}`}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
