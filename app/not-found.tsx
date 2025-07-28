import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="flex h-full flex-col items-center justify-center p-4">
        <Card className="max-w-2xl mx-auto shadow-lg w-full">
          <CardHeader className="flex flex-col items-center space-y-4 pb-6 text-center">
            <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
              <AlertCircle className="size-8 text-red-600 dark:text-red-400" />
            </div>
            <div className="space-y-2">
              <h1
                className={cn(
                  "text-6xl font-bold tracking-tight text-foreground"
                )}
              >
                404
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Page Not Found
              </h2>
              <p className="max-w-md text-muted-foreground">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                The page might have been moved, deleted, or you entered the
                wrong URL.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <Button asChild className="h-12">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="size-4" />
                  Go Home
                </Link>
              </Button>
              {/* <Button asChild variant="outline" className="h-12">
                <Link
                  href="/docs/introduction"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Browse Docs
                </Link>
              </Button> */}
            </div>

            {/* Help */}
            <div className="rounded-lg bg-muted/50 p-4">
              <h3 className="mb-2 font-semibold text-foreground">Need Help?</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                If you believe there is a error, let us know
              </p>

              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Support
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report Issue
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
