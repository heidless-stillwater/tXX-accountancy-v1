import { Scale } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2">
      <Scale className="h-[25px] w-[25px] text-primary" />
      <span className="text-[23px] font-bold font-headline text-primary">
        AccountantAI
      </span>
    </Link>
  );
}
