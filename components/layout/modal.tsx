"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  title,
  className,
  children,
}: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        role="button"
        aria-label="Close"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute left-1/2 top-20 w-[90%] max-w-xl -translate-x-1/2 rounded-lg border bg-white shadow-xl",
          className
        )}
      >
        {title ? (
          <div className="border-b p-4 text-sm font-medium">{title}</div>
        ) : null}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
