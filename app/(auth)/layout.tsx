import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import React from 'react';

import '../globals.css';

export const metadata = {
	title: 'Threads Clone',
	description: 'A side project to learn next js ',
	date: '25/6/24',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${inter.className} bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
