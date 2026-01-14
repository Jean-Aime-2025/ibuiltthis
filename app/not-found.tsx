import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <SearchX className="h-8 w-8 text-muted-foreground" />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground">
            Sorry, the page you’re looking for doesn’t exist or may have been
            moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go home
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/explore">Browse products</Link>
          </Button>
        </div>

        {/* Subtle footer */}
        <p className="text-xs text-muted-foreground">
          Error code: 404
        </p>
      </div>
    </div>
  );
}
