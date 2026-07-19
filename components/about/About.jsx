function calculateAge() {
	const today = new Date();
	const birthDate = new Date(2008, 3, 21); // 2008년 4월 21일

	let age = today.getFullYear() - birthDate.getFullYear();

	const hasNotHadBirthday =
		today.getMonth() < birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

	if (hasNotHadBirthday) {
		age--;
	}

	return age;
}

function calculateCareer() {
	const today = new Date();
	const startDate = new Date(2022, 1, 1); // 2022년 2월 1일

	let years = today.getFullYear() - startDate.getFullYear();

	const hasNotReachedAnniversary =
		today.getMonth() < startDate.getMonth() ||
		(today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate());

	if (hasNotReachedAnniversary) {
		years--;
	}

	return years;
}

export default function About() {
	return (
		<section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
			<div className="mx-auto max-w-3xl px-4">
				<p
					aria-hidden="true"
					className="mb-3 text-center text-sm font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400"
				>
					About Me
				</p>

				<h2
					id="about-title"
					className="mb-10 text-center text-3xl font-bold md:text-4xl dark:text-white"
				>
					저를 소개합니다
				</h2>

				<div className="rounded-2xl border border-slate-200 bg-white/70 p-8 text-center shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none">
					<div className="text-center">
						<p className="mb-4 text-base leading-relaxed md:mb-6 md:text-lg dark:text-gray-100">
							안녕하세요! 개발자{' '}
							<span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text font-bold text-transparent dark:from-amber-400 dark:to-orange-400">
								FELNUT
							</span>
							입니다.
						</p>

						<p className="text-slate-700 dark:text-gray-100">
							<span className="font-bold text-slate-900 dark:text-white">프론트엔드</span>,{' '}
							<span className="font-bold text-slate-900 dark:text-white">임베디드 시스템</span>,{' '}
							<span className="font-bold text-slate-900 dark:text-white">데이터베이스</span>를
							공부하고 있습니다.
						</p>
					</div>

					<div
						aria-label="FELNUT에 대한 정보"
						className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
					>
						<div
							aria-label={`${calculateAge()}세`}
							className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
						>
							<p
								aria-hidden="true"
								className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-3xl font-bold text-transparent dark:from-amber-400 dark:to-orange-400"
							>
								{calculateAge()}세
							</p>

							<p className="text-xs text-slate-500 md:text-sm dark:text-gray-400">고등학생</p>
						</div>

						<div
							aria-label={`코딩 공부 ${calculateCareer()}년`}
							className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
						>
							<p
								aria-hidden="true"
								className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-3xl font-bold text-transparent dark:from-amber-400 dark:to-orange-400"
							>
								{calculateCareer()}년
							</p>

							<p className="text-xs text-slate-500 md:text-sm dark:text-gray-400">코딩 공부</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
