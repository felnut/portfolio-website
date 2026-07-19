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
		if (visible) {
			setDisplay(true);
			setToastVisible(true);
			clearTimeout(timeoutRef.current);
			clearTimeout(fadeOutRef.current);
			timeoutRef.current = setTimeout(() => setVisible(false), 800);
		}
	}, [visible, setVisible]);

	useEffect(() => {
		if (!visible && toastVisible) {
			clearTimeout(fadeOutRef.current);
			fadeOutRef.current = setTimeout(() => {
				setDisplay(false);
				setToastVisible(false);
			}, 500);
		}
	}, [visible, toastVisible]);

	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
			clearTimeout(fadeOutRef.current);
		};
	}, []);

	if (!display) return null;

	return (
		<div className="fixed inset-0 z-9999 flex items-center justify-center">
			<div
				className={`rounded-lg bg-gray-800 bg-opacity-90 px-10 py-8 text-xl font-bold text-white shadow-xl transition-all duration-500 ${
					visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
				}`}
			>
				<p>{message}</p>
			</div>
		</div>
	);
}
