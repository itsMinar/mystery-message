import CarouselMessages from '@/components/CarouselMessages';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center bg-gray-800 px-4 py-12 text-white md:px-24">
        <section className="mb-8 text-center md:mb-12">
          <h1 className="text-3xl font-bold md:text-5xl">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-3 text-base md:mt-4 md:text-lg">
            Mystery Message - Where your identity remains a secret.
          </p>
        </section>

        <CarouselMessages />
      </main>

      <Footer />
    </>
  );
}
