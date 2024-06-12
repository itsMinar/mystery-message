import SendMessageForm from '@/components/forms/SendMessageForm';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Send Message - Mystery Message',
};

type SendMessagePageProps = {
  params: {
    username: string;
  };
};

export default function SendMessagePage({ params }: SendMessagePageProps) {
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
