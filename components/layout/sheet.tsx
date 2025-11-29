"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  children: React.ReactNode;
};

export function Sheet({
  open,
  onOpenChange,
  side = "left",
  className,
  children,
}: SheetProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        role="button"
        aria-label="Close menu"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute bg-white shadow-xl",
          side === "left" && "left-0 top-0 h-full w-80",
          side === "right" && "right-0 top-0 h-full w-80",
          side === "top" && "top-0 left-0 right-0 h-64",
          side === "bottom" && "bottom-0 left-0 right-0 h-64",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
