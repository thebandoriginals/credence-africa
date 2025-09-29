import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Logo className="h-10 w-10"/>
              Credence Africa
            </Link>
            <p className="text-sm">Strategic Advisory for Africa’s Next Growth Frontier.</p>
          </div>

          <div>
            <h3 className="font-semibold uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/sectors" className="hover:underline">Sectors</Link></li>
              <li><Link href="/case-studies" className="hover:underline">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:underline">Insights</Link></li>
              <li><Link href="/consult" className="hover:underline">Book a Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:connect@credence.africa" className="hover:underline">connect@credence.africa</a></li>
              <li><a href="tel:+254719468240" className="hover:underline">+254 719 468 240</a></li>
              <li>Applewood Adams, Ngong Road, Nairobi</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
                <Link href="#" className="hover:text-primary">LinkedIn</Link>
                <Link href="#" className="hover:text-primary">(X)</Link>
                <Link href="#" className="hover:text-primary">Instagram</Link>
            </div>
             <div className="mt-4">
                <Link href="/consult">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                        Book a Consultation
                    </button>
                </Link>
             </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
