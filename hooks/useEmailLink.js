'use client';

import { useEffect, useState } from 'react';

const EMAIL_ADDRESS = 'kinghojoon12@gmail.com';

function computeEmailLink() {
	const width = window.innerWidth;
	const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	const isMobileDevice = width <= 768 || isTouchDevice;

	if (isMobileDevice) {
		return `mailto:${EMAIL_ADDRESS}`;
	}

	const userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.includes('edg')) {
		return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL_ADDRESS}`;
	}
	if (userAgent.includes('firefox')) {
		return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
	}
	if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
		const isMacOS = userAgent.includes('mac');
		const isIOS = userAgent.includes('iphone') || userAgent.includes('ipad');
		return isMacOS || isIOS
			? `mailto:${EMAIL_ADDRESS}`
			: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
	}
	if (
		userAgent.includes('opera') ||
		userAgent.includes('opr') ||
		userAgent.includes('brave') ||
		userAgent.includes('vivaldi') ||
		userAgent.includes('whale') ||
		userAgent.includes('chrome')
	) {
		return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
	}
	if (userAgent.includes('trident') || userAgent.includes('msie')) {
		return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL_ADDRESS}`;
	}
	return `mailto:${EMAIL_ADDRESS}`;
}

export function useEmailLink() {
	const [emailLink, setEmailLink] = useState('');

	useEffect(() => {
		const update = () => setEmailLink(computeEmailLink());
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	return emailLink;
}
