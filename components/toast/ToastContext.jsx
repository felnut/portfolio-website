'use client';

import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
	const [message, setMessage] = useState('');
	const [visible, setVisible] = useState(false);

	function showToast(text) {
		setMessage(text);
		setVisible(true);
	}

	return (
		<ToastContext.Provider value={{ message, visible, showToast, setVisible }}>
			{children}
		</ToastContext.Provider>
	);
}

export function useToast() {
	const ctx = useContext(ToastContext);
	if (!ctx) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return ctx;
}
