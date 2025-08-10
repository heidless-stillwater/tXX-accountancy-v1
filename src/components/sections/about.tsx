import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">
          <div>
            <Image
              src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/career-coaching.jpg"
              alt="Team of accountants collaborating"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="accountants team"
            />
          </div>
          <div className="space-y-6">
            <Badge variant="outline" className="text-sm font-semibold">
              About Us
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Your Trusted Financial Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              At AccountantAI, we are more than just accountants; we are partners in your success. With years of experience and a commitment to excellence, we offer tailored financial solutions to individuals and businesses. Our proactive approach ensures you stay ahead of financial challenges and seize opportunities for growth.
            </p>
            <p className="text-lg text-muted-foreground">
              We leverage cutting-edge technology and deep industry knowledge to provide accurate, efficient, and insightful services. From tax planning to business advisory, we are dedicated to helping you achieve financial clarity and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
