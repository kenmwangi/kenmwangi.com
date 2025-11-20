"use client";
import { useId } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  BoltIcon,
  FileTextIcon,
  GlobeIcon,
  HomeIcon,
  LayersIcon,
  LogOutIcon,
  UserPenIcon,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { authClient } from "@/lib/auth-client";

const navigationLinks = [
  { href: "/", label: "Home", icon: HomeIcon, active: true },
  { href: "/experience", label: "Experience", icon: LayersIcon },
  { href: "/skills", label: "Skills", icon: Waypoints },
  { href: "/blog", label: "Blog", icon: FileTextIcon },
];

// Language options
const languages = [
  { value: "en", label: "En" },
  { value: "sw", label: "Sw" },
];

export default function Header() {
  const id = useId();

  const { data: session, isPending: loading } = authClient.useSession();
  return (
    <header className="before:-inset-x-32 relative mb-14 before:absolute before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
      <div
        aria-hidden="true"
        className="before:-bottom-px before:-left-12 before:-ml-px after:-right-12 after:-bottom-px after:-mr-px before:absolute before:z-10 before:size-[3px] before:bg-ring/50 after:absolute after:z-10 after:size-[3px] after:bg-ring/50"
      />
      <div className="h-16 flex items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile Menu Trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden bg-neutral-50"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5"
                          active={link.active}
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <section className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              Ken Mwangi.
            </Link>

            {/* Desktop navigation -icon only */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                <TooltipProvider>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <NavigationMenuLink
                            href={link.href}
                            className="flex size-8 items-center justify-center p-1.5"
                          >
                            <link.icon size={20} aria-hidden="true" />
                            <span className="sr-only">{link.label}</span>
                          </NavigationMenuLink>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="px-2 py-1 text-xs"
                        >
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </NavigationMenuItem>
                  ))}
                </TooltipProvider>
              </NavigationMenuList>
            </NavigationMenu>
          </section>
        </div>

        {/* Right Side */}
        <section className="flex items-center gap-2">
          <Select defaultValue="en">
            <SelectTrigger
              id={`language-${id}`}
              className="h-8 border-none px-2 shadow-none hover:bg-accent hover:text-accent-foreground [&>svg]:shrink-0 [&>svg]:text-muted-foreground/80"
              aria-label="Select language"
            >
              <GlobeIcon size={16} aria-hidden="true" />
              <SelectValue className="hidden sm:inline-flex" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  <span className="flex items-center gap-2">
                    <span className="truncate">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* User Menu */}

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-auto p-0 hover:bg-transparent"
                  variant="ghost"
                >
                  <Avatar>
                    <AvatarImage
                      alt={session.user.name}
                      src="/ken-mwangi.jpeg"
                    />
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-w-64">
                <DropdownMenuLabel className="flex min-w-0 flex-col">
                  <span className="truncate font-medium text-foreground text-sm">
                    {session.user.name}
                  </span>
                  <span className="truncate font-medium text-muted-foreground text-sm">
                    {session.user.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BoltIcon
                      aria-hidden="true"
                      className="opacity-60"
                      size={16}
                    />{" "}
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPenIcon
                      aria-hidden="true"
                      className="opacity-60"
                      size={16}
                    />{" "}
                    <span>Blog</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <button
                      className="w-full flex gap-2 items-center"
                      onClick={() => authClient.signOut()}
                    >
                      <LogOutIcon
                        aria-hidden="true"
                        className="opacity-60 text-start"
                        size={16}
                      />
                      <span className="text-start">Logout</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/auth/login">Sign in</Link>
              </Button>
            </>
          )}
        </section>
      </div>
    </header>
  );
}
