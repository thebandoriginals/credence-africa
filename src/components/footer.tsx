import Link from "next/link";
import { Logo } from "./logo";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Credence Africa</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Empowering Africa’s Future
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
            <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
            <li><Link href="/sectors" className="text-sm hover:underline">Sectors</Link></li>
            <li><Link href="/resources" className="text-sm hover:underline">Resources</Link></li>
            <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>📧 connect@credence.africa</li>
            <li>📞 +254 719 468 240</li>
            <li>📧 mobility@credence.africa</li>
            <li>📞 +254 759 203 069</li>
            <li>📧 connect@coopsafrica.com</li>
            <li>📞 +254 705 462 363</li>
            <li>📍 1102 Applewood Adams, Ngong Road, Nairobi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container p-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved. &copy; More Than Justice 2024 for Coops Africa</p>
            <Link href="/privacy-policy" className="hover:underline mt-4 md:mt-0">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}