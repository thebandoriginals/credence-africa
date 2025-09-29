import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t">
      <div className="border-t">
        <div className="container p-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
