"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <Badge variant="outline" className="text-sm font-semibold">Contact Us</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-2">
                Get In Touch
            </h2>
            <p className="mt-2 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help. Reach out to us with any questions or to schedule a consultation.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Address</h4>
                                <p className="text-muted-foreground">Woodberry Down, London N4 2TG</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <a href="tel:1234567890" className="text-muted-foreground hover:text-primary transition-colors">1234 567 890</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:test@test.com" className="text-muted-foreground hover:text-primary transition-colors">test@test.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="mt-8">
                    <div className="aspect-video rounded-lg overflow-hidden border">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.997230009491!2d-0.0898556842279284!3d51.56942997964547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c1ce12d447d%3A0x867a5050fd798418!2sWoodberry%20Down%2C%20London%20N4%202TG%2C%20UK!5e0!3m2!1sen!2sus!4v1689257635835!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Card className="shadow-lg bg-background">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message..." className="min-h-[120px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Submit Message</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
