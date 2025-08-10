import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section id="cta" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="rounded-lg bg-primary p-12 text-primary-foreground">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to take control of your finances?
            </h2>
            <p className="max-w-3xl text-lg text-primary-foreground/80">
              Let's discuss how our expert services can benefit your business. Schedule your free, no-obligation consultation today.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="#contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
