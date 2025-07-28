import Pricing from "@/components/misc/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div>
      <Pricing />
    </div>
  );
}
