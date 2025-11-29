import Link from "next/link";

const footerLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Essays",
    href: "/essays",
  },
  {
    title: "Open Source",
    href: "/open-source",
  },
];

export default function Footer() {
  return (
    <footer className="before:-inset-x-32 relative mt-16 py-8 before:absolute before:top-0 before:h-px before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] md:mt-20">
      <div
        aria-hidden="true"
        className="before:-top-px before:-left-12 before:-ml-px after:-top-px after:-right-12 after:-mr-px before:absolute before:z-10 before:size-[3px] before:bg-ring/50 after:absolute after:z-10 after:size-[3px] after:bg-ring/50"
      />

      <div className="max-w-6xl mx-auto py-8 text-sm text-muted-foreground">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/ken-mwangi.jpeg"
              width={20}
              height={20}
              alt="Ken Mwangi"
            /> */}
            <span>Copyright &copy; {new Date().getFullYear()}</span>
            <span className="font-medium">Ken Mwangi</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {footerLinks.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className="hover:underline"
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
