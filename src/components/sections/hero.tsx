import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative bg-card pt-24 pb-12 md:pt-32 lg:pt-40 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Expert Chartered Accountancy
              <span className="block text-primary">For Your Business Growth</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0 md:text-xl">
              We provide comprehensive financial services to help you navigate complexities, optimize your finances, and achieve your business goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row md:justify-start justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="#contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <Image
              src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/career-coaching.jpg"
              alt="Professional accountant working in an office"
              width={600}
              height={450}
              className="mx-auto rounded-lg shadow-2xl"
              data-ai-hint="accountant office"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
