import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import defaultValues from '@/app/configs/defaults';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Acc 343 Exam 2',
    default: 'Acc 343 Exam 2',
  },
  description: ' Aamira Alladeen Exam 2 ACCT 343',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={defaultValues.lightTheme}>
      <body className="mx-2 font-serif text-lg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
