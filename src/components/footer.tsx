import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg">Credence Africa</span>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            Where expertise meets opportunity, and strategy meets impact.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
             <p><a href="mailto:connect@credence.africa" className="hover:text-primary">connect@credence.africa</a></p>
             <p><a href="tel:+254719468240" className="hover:text-primary">+254 719 468 240</a></p>
             <p>Applewood Adams, Ngong Road, Nairobi</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/credence-consult/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link href="/credence-consult/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link href="/credence-consult/sectors" className="text-muted-foreground hover:text-primary">Sectors</Link></li>
            <li><Link href="/credence-consult/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
            <li><Link href="/credence-consult/insights" className="text-muted-foreground hover:text-primary">Insights</Link></li>
            <li><Link href="/credence-consult/consult" className="text-muted-foreground hover:text-primary">Book a Consultation</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
           <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/credence-consult/services#capital-raising" className="text-muted-foreground hover:text-primary">Capital Raising</Link></li>
            <li><Link href="/credence-consult/services#public-affairs" className="text-muted-foreground hover:text-primary">Public Affairs</Link></li>
            <li><Link href="/credence-consult/services#trade-investment" className="text-muted-foreground hover:text-primary">Trade & Investment</Link></li>
            <li><Link href="/credence-consult/services#enterprise-architecture" className="text-muted-foreground hover:text-primary">Enterprise Architecture</Link></li>
            <li><Link href="/credence-consult/services#ip-commercialization" className="text-muted-foreground hover:text-primary">IP Commercialization</Link></li>
          </ul>
        </div>
        <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4 mt-4">
                {/* Add social media icons here */}
            </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container p-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
