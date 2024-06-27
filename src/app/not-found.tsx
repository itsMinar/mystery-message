import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You Lost - Mystery Message',
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="animate-bounce text-9xl font-extrabold text-red-500">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold md:text-3xl">
          Oops! You seem to be lost.
        </p>

        <p className="mb-8 mt-4">
          The URL you entered is invalid or the page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="rounded-full bg-blue-500 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
