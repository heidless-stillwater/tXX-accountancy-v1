import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full py-24 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/career-coaching.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Expert Chartered Accountancy
            <span className="block text-primary">For Your Business Growth</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 md:text-xl">
            We provide comprehensive financial services to help you navigate
            complexities, optimize your finances, and achieve your business
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="#contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg text-white border-white hover:bg-white hover:text-primary"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
