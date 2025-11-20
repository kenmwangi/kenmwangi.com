"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Camera, Mail, MapPin } from "lucide-react";
import Link from "next/link";
export default function HomeDisplay() {
  const { data: session, isPending: loading } = authClient.useSession();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Card>
        <CardContent>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="relative">
              <Avatar className="size-24 roundd-full border border-neutral-100">
                <AvatarImage src="/ken-mwangi.jpeg" alt="Profile" />
                <AvatarFallback className="text-2xl">KM</AvatarFallback>
              </Avatar>

              <Button
                size="icon"
                variant="outline"
                className="absolute -right-2 -bottom-2 size-8 rounded-full"
              >
                <Camera />
              </Button>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <h1 className="text-2xl font-bold">Ken Mwangi</h1>
                <Badge variant="secondary">FullStack Engineer</Badge>
              </div>
              <p className="text-muted-foreground">
                Senior Fullstack Engineer -{" "}
                <Link
                  href="https://www.african-realestate.com/"
                  target="_blank"
                  rel="noopener norefferer"
                  className="border-gray-200 bg-gray-50 text-gray-500"
                >
                  African Real Estate
                </Link>{" "}
              </p>

              <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Mail className="size-4" />
                  hello@kenmwangi.com
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  Nairobi, KE
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
