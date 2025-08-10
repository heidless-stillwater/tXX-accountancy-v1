import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Logo } from './logo';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">Your trusted partner in financial excellence and business growth.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Contact Info</h3>
            <div className="grid gap-2 text-muted-foreground">
                <a href="mailto:test@test.com" className="hover:text-primary transition-colors">test@test.com</a>
                <a href="tel:1234567890" className="hover:text-primary transition-colors">1234 567 890</a>
                <p>Woodberry Down, London N4 2TG</p>
                <a href="#" className="hover:text-primary transition-colors">Legal & Privacy</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Quick Links</h3>
            <div className="grid gap-2 text-muted-foreground">
                <Link href="#about" className="hover:text-primary">About Us</Link>
                <Link href="#services" className="hover:text-primary">Services</Link>
                <Link href="#testimonials" className="hover:text-primary">Testimonials</Link>
                <Link href="#contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for the latest financial tips and news.</p>
            <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AccountantAI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                 <Link href="#" aria-label="Twitter">
                    <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                 <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
