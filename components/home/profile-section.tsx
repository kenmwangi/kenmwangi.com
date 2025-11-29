import Link from "next/link";
import ProfileAvatar from "./profile-avatar";
import ProfileBadge from "./profile-badge";

const user = {
  name: "Ken Mwangi",
  email: "hello@kenmwangi.com",
  bio: "Engineer and researcher exploring the intersection of technology,culture, and policy. Sharing experiences, contributions, and curated reads.",
  avatar: "/ken-mwangi.jpeg",
  links: [
    { label: "View profile", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Open Source", href: "/open-source" },
    { label: "Essays", href: "/essays" },
  ],
};

export default function Profile() {
  return (
    <section className="border-b bg-white">
      <div className=" max-w-6xl mx-auto py-6 md:py-8 flex flex-col lg:flex-row lg:items-center gap-6">
        <ProfileAvatar src={user.avatar} alt="Ken Mwangi" size={64} />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl">{user.name}</h2>
            <ProfileBadge className="bg-muted text-foreground">
              Backend Engineer
            </ProfileBadge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
          <p className="mt-3 text-sm md:text-base max-w-2xl">{user.bio}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {user.links.map((link, index) => {
              return (
                <>
                  <Link
                    href={link.href}
                    key={link.href}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                  {index < user.links.length - 1 ? (
                    <span className="text-muted-foreground text-center">
                      &middot;
                    </span>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
