import UserVerifyForm from '@/components/forms/UserVerifyForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Account - Mystery Message',
};

type AccountVerifyPageProps = {
  params: {
    username: string;
  };
};

export default function AccountVerifyPage({ params }: AccountVerifyPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Verify Account
          </h1>
          <p className="mb-4">
            Enter the Verification Code that was Sent to your Email
          </p>
        </div>

        <UserVerifyForm username={params.username} />
      </div>
    </div>
  );
}
