"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#who-we-are", label: "Who We Are" },
  { href: "/#our-approach", label: "Our Approach" },
  { href: "/#what-we-solve", label: "What We Solve" },
  { href: "/#featured-solutions", label: "Solutions" },
  { href: "/#recent-insights", label: "Insights" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 w-85">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Logo />
          <span className="hidden sm:inline">Credence Africa</span>
        </Link>
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild>
            <Link href="/consult">Book a Consultation</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {[...navLinks, { href: "/consult", label: "Book a Consultation" }].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
