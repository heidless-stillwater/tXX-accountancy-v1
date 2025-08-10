import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Cta } from '@/components/sections/cta';
import { AiTips } from '@/components/sections/ai-tips';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Cta />
        <AiTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
