"use client";

import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold">Credence Africa</span>
        </Link>
      </div>
    </header>
  );
}
