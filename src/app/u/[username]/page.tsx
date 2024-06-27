import { findUser } from '@/actions';
import SendMessageForm from '@/components/forms/SendMessageForm';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Send Message - Mystery Message',
};

type SendMessagePageProps = {
  params: {
    username: string;
  };
};

export default async function SendMessagePage({
  params,
}: SendMessagePageProps) {
  const user = await findUser(params.username);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto my-8 max-w-4xl rounded bg-white p-6">
      <h1 className="mb-6 text-center text-4xl font-bold">
        Public Profile Link
      </h1>

      <SendMessageForm username={params.username} />

      <Separator className="my-6" />

      <div className="text-center">
        <div className="mb-4">Get Your Message Board</div>
        <Link href={'/sign-up'}>
          <Button>Create Your Account</Button>
        </Link>
      </div>
    </div>
  );
}
