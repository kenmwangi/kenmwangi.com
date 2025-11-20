"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
export default function SocialAuthButton() {
  return (
    <Button
      variant="secondary"
      className="w-full gap-2"
      size="lg"
      onClick={() => authClient.signIn.social({ provider: "google" })}
    >
      <Image src={`/google.svg`} alt="Google" width={20} height={20} />
      Continue with Google
    </Button>
  );
}
