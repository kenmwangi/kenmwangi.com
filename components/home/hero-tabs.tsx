"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface HeroTabsProps {
  tabs: { id: string; label: string }[];
  defaultTabId?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export default function HeroTabs({
  tabs = [],
  defaultTabId,
  onChange,
  className,
}: HeroTabsProps) {
  const [active, setActive] = useState<string>(defaultTabId ?? tabs[0]?.id);

  useEffect(() => {
    if (onChange) onChange(active);
  }, [active, onChange]);

  return (
    <div className={cn("flex items-center gap-2 overflow-x-auto", className)}>
      {tabs.map((tab) => {
        return (
          <button
            onClick={() => setActive(tab.id)}
            className={cn(
              "h-9 rounded-full border px-3 text-sm",
              active === tab.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white text-foreground hover:bg-muted"
            )}
            key={tab.id}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
