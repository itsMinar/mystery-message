import SignUpForm from '@/components/forms/SignUpForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up - Mystery Message',
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Join Mystery Message
          </h1>
          <p className="mb-4">Sign up to start your anonymous journey</p>
        </div>

        <SignUpForm />

        <div className="mt-4 text-center">
          <p>
            Already a member?{' '}
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
