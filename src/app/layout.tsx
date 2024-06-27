import { Toaster } from '@/components/ui/sonner';
import AuthProvider from '@/context/AuthProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mystery Message',
  description:
    'Mystery Message is a platform that allows users to send and receive messages without revealing their identities.',
  keywords: [
    'Mystery Message',
    'Anonymous messaging',
    'Secure messaging',
    'Private messaging',
    'Encrypted messages',
    'Anonymous chat',
    'Confidential communication',
    'Privacy messaging',
    'Anonymous texts',
    'Secure chat',
    'Private messages',
    'Anonymous platform',
    'End-to-end encryption',
    'Secure chat',
    'Anonymous board',
    'Private chat',
    'Online messaging',
    'Anonymous tool',
  ],
  openGraph: {
    title: 'Mystery Message',
    description:
      'Mystery Message is a platform that allows users to send and receive messages without revealing their identities.',
    images: [
      {
        url: '/mystery.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-gray-800 bg-green-200',
                warning: 'text-yellow-400',
                info: 'bg-blue-500',
              },
            }}
          />
        </body>
      </AuthProvider>
    </html>
  );
}
