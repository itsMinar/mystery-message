'use client';

import { User } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <nav className="bg-gray-900 p-4 text-white shadow-md md:p-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <Link href="/" className="mb-4 text-xl font-bold md:mb-0">
          Mystery Message
        </Link>
        {session ? (
          <>
            <span className="mr-4">Welcome, {user.username || user.email}</span>
            <Button
              onClick={() => signOut()}
              className="w-full bg-slate-100 text-black md:w-auto"
              variant="outline"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button
              className="w-full bg-slate-100 text-black md:w-auto"
              variant={'outline'}
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
