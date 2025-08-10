import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    quote: "Working with AccountantAI has been a game-changer for our business. Their strategic advice and meticulous attention to detail have been invaluable.",
    name: "Sarah Lee",
    title: "CEO, Innovate Ltd.",
    initials: "SL",
  },
  {
    quote: "The team is professional, responsive, and incredibly knowledgeable. They simplified our complex financial reporting, allowing us to focus on growth.",
    name: "John Doe",
    title: "Founder, Tech Solutions",
    initials: "JD",
  },
  {
    quote: "As a startup, managing finances was daunting. AccountantAI provided the clarity and support we needed to build a solid financial foundation. Highly recommended!",
    name: "Maria Garcia",
    title: "Director, Creative Co.",
    initials: "MG",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
            <Badge variant="outline" className="text-sm font-semibold">Testimonials</Badge>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                What Our Clients Say
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have grown with our expert financial guidance.
            </p>
        </div>
        <Carousel
            opts={{
                align: "start",
            }}
            className="mx-auto max-w-4xl pt-12"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1 h-full">
                            <Card className="bg-card h-full flex flex-col">
                                <CardContent className="flex flex-col items-center justify-center p-8 text-center flex-grow">
                                    <blockquote className="text-lg italic text-foreground mb-6">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <Avatar>
                                            <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} data-ai-hint="person portrait" />
                                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
