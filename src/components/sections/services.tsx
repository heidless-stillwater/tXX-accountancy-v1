import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, FileText, HandCoins, Landmark, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services = [
  {
    icon: Landmark,
    title: 'Tax Planning & Compliance',
    description: 'Minimize your tax liabilities and ensure full compliance with all regulations.',
  },
  {
    icon: Building,
    title: 'Audit & Assurance',
    description: 'Gain confidence in your financial statements with our thorough auditing services.',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description: 'Strategic advice to help your business grow, improve, and succeed.',
  },
  {
    icon: HandCoins,
    title: 'Bookkeeping & Payroll',
    description: 'Accurate and timely bookkeeping and payroll services to free up your time.',
  },
  {
    icon: FileText,
    title: 'Financial Reporting',
    description: 'Clear and concise financial reports to inform your business decisions.',
  },
  {
    icon: Users,
    title: 'Company Secretarial',
    description: 'Comprehensive support to ensure your company meets its statutory obligations.',
  },
];

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="flex flex-col items-center text-center p-6 bg-background hover:shadow-lg transition-shadow duration-300 border-0 md:border">
      <CardHeader className="p-0 items-center">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}


export function Services() {
  return (
    <section id="services" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <Badge variant="outline" className="text-sm font-semibold">Our Services</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a wide range of services designed to meet the unique needs of your business.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
