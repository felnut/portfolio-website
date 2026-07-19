'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from './ToastContext';

export default function Toast() {
	const { message, visible, setVisible } = useToast();

	const [display, setDisplay] = useState(false);
	const [toastVisible, setToastVisible] = useState(false);

	const timeoutRef = useRef(null);
	const fadeOutRef = useRef(null);

	useEffect(() => {
		if (!visible) return;

		setDisplay(true);
		setToastVisible(true);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (fadeOutRef.current) {
			clearTimeout(fadeOutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setVisible(false);
		}, 800);
	}, [visible, setVisible]);

	useEffect(() => {
		if (visible || !toastVisible) return;

		if (fadeOutRef.current) {
			clearTimeout(fadeOutRef.current);
		}

		fadeOutRef.current = setTimeout(() => {
			setDisplay(false);
			setToastVisible(false);
		}, 500);
	}, [visible, toastVisible]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			if (fadeOutRef.current) {
				clearTimeout(fadeOutRef.current);
			}
		};
	}, []);

	if (!display) return null;

	return (
		<div
			className="pointer-events-none fixed inset-x-0 bottom-8 z-9999 flex justify-center"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div
				role="alert"
				className={`rounded-lg bg-gray-800/90 px-10 py-5 text-center text-lg font-bold text-white shadow-xl transition-all duration-500 ${
					visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
				}`}
			>
				<p>{message}</p>
			</div>
		</div>
	);
}
