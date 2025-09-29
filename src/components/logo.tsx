import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
    >
      <path d="M 20,80 L 50,20 L 80,80 L 20,80 M 35,50 L 65,50" />
    </svg>
  );
}