import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Credence Africa logo"
      width={100}
      height={100}
      className={cn("h-10 w-10", className)}
    />
  );
}
