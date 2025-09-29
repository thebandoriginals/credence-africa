import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/favicon.png"
      alt="Credence Africa logo"
      width={32}
      height={32}
      className={cn("h-8 w-8", className)}
    />
  );
}
