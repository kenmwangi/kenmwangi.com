import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const LandingHeader = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              K
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground font-medium"
            >
              Companies
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-muted-foreground font-medium">
                Startup Jobs
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>All Jobs</DropdownMenuItem>
                <DropdownMenuItem>• Engineering</DropdownMenuItem>
                <DropdownMenuItem>• Operations</DropdownMenuItem>
                <DropdownMenuItem>• Marketing</DropdownMenuItem>
                <DropdownMenuItem>• Sales</DropdownMenuItem>
                <div className="border-t my-1"></div>
                <DropdownMenuItem>Startup Job Guide</DropdownMenuItem>
                <DropdownMenuItem>YC Startup Jobs Blog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="text-foreground hover:text-muted-foreground font-medium"
            >
              Find a Co-Founder
            </a>
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground font-medium"
            >
              Resources
            </a>
          </nav>

          {/* Apply Button */}
          <div className="text-sm text-muted-foreground">
            Apply for <span className="font-semibold">F2025</span> batch.
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
