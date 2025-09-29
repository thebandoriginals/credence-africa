"use client";

import Link from "next/link";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const sectors: { title: string; href: string; description: string }[] = [
  {
    title: "Consult",
    href: "/sectors/consult",
    description: "Strategic advisory to scale businesses and institutions.",
  },
  {
    title: "Cooperatives",
    href: "/sectors/cooperatives",
    description: "Catalyzing cooperative growth with innovation.",
  },
  {
    title: "Faith-Based",
    href: "/sectors/faith-based",
    description: "Building sustainable, mission-aligned ventures.",
  },
  {
    title: "Mobility",
    href: "/sectors/mobility",
    description: "Transforming transport with cooperative-led models.",
  },
  {
    title: "Non-Profit",
    href: "/sectors/non-profit",
    description: "Strengthening nonprofits for impact.",
  },
  {
    title: "Public Affairs",
    href: "/sectors/public-affairs",
    description: "Navigating policy and regulatory landscapes.",
  },
  {
    title: "Agriculture & Food",
    href: "/sectors/agriculture-food",
    description: "Strengthening food systems with cooperative enterprise.",
  },
  {
    title: "Creative & Digital Economy",
    href: "/sectors/creative-digital",
    description: "Empowering Africa’s creative and digital sectors.",
  },
  {
    title: "Education & Skills Development",
    href: "/sectors/education-skills",
    description: "Skilling Africa’s youth for economic opportunities.",
  },
  {
    title: "Healthcare & Wellness",
    href: "/sectors/healthcare-wellness",
    description: "Strengthening healthcare ecosystems.",
  },
  {
    title: "Hospitality & Tourism",
    href: "/sectors/hospitality-tourism",
    description: "Enhancing tourism ecosystems.",
  },
  {
    title: "SMEs & Startups",
    href: "/sectors/smes-startups",
    description: "Empowering entrepreneurship and innovation.",
  },
  {
    title: "Technology & Digital Economy",
    href: "/sectors/technology-digital",
    description: "Scaling African-led digital enterprises.",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Credence Africa</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <Logo />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Credence Africa
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Strategic solutions for Africa's dynamic markets.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about#who-we-are" title="Who We Are" />
                    <ListItem href="/about#our-approach" title="Our Approach" />
                    <ListItem href="/about#our-team" title="Our Team" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {sectors.map((sector) => (
                      <ListItem
                        key={sector.title}
                        title={sector.title}
                        href={sector.href}
                      >
                        {sector.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                    <ListItem href="/case-studies" title="Case Studies">
                      See how we’ve empowered ventures across Africa.
                    </ListItem>
                    <ListItem href="/insights" title="Insights">
                      Expert analysis on cooperatives, mobility, policy, and
                      more.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                    <ListItem href="/consult" title="Book a Consultation">
                      Schedule a call with our senior advisors.
                    </ListItem>
                    <ListItem href="/contact" title="General Inquiry">
                      Have a question? Get in touch with our team.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Credence Africa</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-bold">Credence Africa</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/">Home</Link>
                <details>
                  <summary>About</summary>
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link href="/about#who-we-are">Who We Are</Link>
                    <Link href="/about#our-approach">Our Approach</Link>
                    <Link href="/about#our-team">Our Team</Link>
                  </div>
                </details>
                <details>
                  <summary>Sectors</summary>
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    {sectors.map((s) => (
                      <Link key={s.href} href={s.href}>{s.title}</Link>
                    ))}
                  </div>
                </details>
                 <details>
                  <summary>Resources</summary>
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/insights">Insights</Link>
                  </div>
                </details>
                 <details>
                  <summary>Contact</summary>
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link href="/consult">Book a Consultation</Link>
                    <Link href="/contact">General Inquiry</Link>
                  </div>
                </details>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
