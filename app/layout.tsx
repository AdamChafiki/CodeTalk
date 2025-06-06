import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import '@/styles/globals.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'CodeTalk',
  description:
    'CodeTalk is a full-stack web application designed for developers to collaborate, ask technical questions, and share knowledge within topic-based groups.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} antialiased `}>{children}</body>
    </html>
  );
}
