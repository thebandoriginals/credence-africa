
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Bus, Church, Handshake, HeartPulse, Leaf, Briefcase, Laptop, Menu, Mic, School, Users, Building, Plane } from "lucide-react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
];

const sectorLinks = [
    { icon: <Leaf />, name: "Agriculture & Food", description: "Enhancing agribusiness operations and climate-smart farming.", href: "/sectors/agriculture-food" },
    { icon: <Mic />, name: "Creative & Digital Economy", description: "Supporting artists and digital entrepreneurs.", href: "/sectors/creative-digital-economy" },
    { icon: <School />, name: "Education & Skills Development", description: "Modern strategies in curriculum and institutional leadership.", href: "/sectors/education-skills-development" },
    { icon: <Church />, name: "Faith-Based Organizations", description: "Governance, fundraising, and community impact strategies.", href: "/sectors/faith-based-organizations" },
    { icon: <HeartPulse />, name: "Healthcare & Wellness", description: "Improving healthcare management and digital health solutions.", href: "/sectors/healthcare-wellness" },
    { icon: <Plane />, name: "Hospitality & Tourism", description: "Driving sustainable tourism and business growth strategies.", href: "/sectors/hospitality-tourism" },
    { icon: <Users />, name: "Non-Profit Sector", description: "Strengthening impact measurement, fundraising, and governance.", href: "/sectors/non-profit-sector" },
    { icon: <Building />, name: "Public Sector & Governance", description: "Enhancing policy development and governance efficiency.", href: "/sectors/public-sector-governance" },
    { icon: <Briefcase />, name: "SMEs & Startups", description: "Business model innovation, funding access, and scaling.", href: "/sectors/smes-startups" },
    { icon: <Laptop />, name: "Technology & Digital Economy", description: "Driving innovation in fintech, AI, and digital transformation.", href: "/sectors/technology-digital-economy" },
    { icon: <Handshake />, name: "Cooperatives & Social Economy", description: "Strengthening governance, leadership, and financial sustainability.", href: "/sectors/cooperatives-social-economy" },
    { icon: <Bus />, name: "Mobility & Logistics", description: "Advancing smart transport and sustainable mobility.", href: "/sectors/mobility-logistics" },
];


export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Logo className="h-20 w-auto" />
          <span className="hidden sm:inline">Credence Africa</span>
        </Link>
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref asChild>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "hover:underline hover:decoration-primary hover:underline-offset-4 hover:decoration-2",
                        "data-[active]:underline data-[active]:decoration-primary data-[active]:underline-offset-4 data-[active]:decoration-2 bg-white hover:bg-white"
                      )}
                      active={pathname === link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
               <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(),"hover:underline hover:decoration-primary hover:underline-offset-4 hover:decoration-2","data-[active]:underline data-[active]:decoration-primary data-[active]:underline-offset-4 data-[active]:decoration-2 bg-white hover:bg-white")}>
                  <Link href="/sectors" className={cn(pathname === "/sectors" ? 'underline decoration-primary underline-offset-4 decoration-2' : '')}>Sectors</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-4 p-4">
                    {sectorLinks.map((sector) => (
                      <NavigationMenuLink key={sector.name} asChild>
                        <Link
                          href={sector.href}
                          className="flex items-start gap-4 rounded-md p-3 hover:bg-accent"
                        >
                          <div className="text-primary mt-1">{sector.icon}</div>
                          <div>
                            <div className="font-semibold">{sector.name}</div>
                            <p className="text-sm text-muted-foreground">
                              {sector.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild>
            <Link href="/consult">Book a Consultation</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {[...navLinks, {href: "/sectors", label: "Sectors"}, { href: "/consult", label: "Book a Consultation" }].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
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
