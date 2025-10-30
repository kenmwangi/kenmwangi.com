import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <section className="bg-[#7fee46] flex flex-col justify-center px-4 py-2 text-sm font-medium text-black sm:flex-row">
      <div className="flex flex-col sm:flex-row sm:gap-x-2">
        <span>Developing this portfolio one step at a time.</span>
        <span className="flex items-center gap-x-1">
          <Link href="/blog" className="underline">
            Read more
          </Link>
          <ArrowRight className="size-4" />
        </span>
      </div>
    </section>
  );
}
