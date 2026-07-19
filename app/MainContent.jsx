'use client';

import { ToastProvider } from '@/components/toast/ToastContext';
import Toast from '@/components/toast/Toast';
import BackgroundDecor from '@/components/background/BackgroundDecor';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function MainContent() {
	return (
		<ToastProvider>
			<main className="relative isolate min-h-screen scroll-smooth bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
				<BackgroundDecor />
				<Hero />
				<About />
				<Skills />
				<Toast />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</ToastProvider>
	);
}
