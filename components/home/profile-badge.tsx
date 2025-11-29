import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface ProfilePageProps {
  children: ReactNode;
  className?: string;
}

export default function ProfileBadge({
  children,
  className,
}: ProfilePageProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
