import LandingFooter from "@/components/misc/landing-footer";
import LandingHeader from "@/components/misc/landing-header";
import { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <SiteHeader /> */}
      <LandingHeader />
      <main className="">{children}</main>
      <LandingFooter />
    </div>
  );
}
