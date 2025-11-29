"use client";
import { useState } from "react";
import HeroTabs from "./hero-tabs";
const feed = [
  {
    title: "Charts of the Week: Code Gen Strikes Back",
    pub: "AI",
    read: "4m read",
    category: "featured",
    img: "/house.jpeg",
  },
  {
    title: "Bitcoin Is Transitioning Out of the Strong Outflows Regime",
    pub: "Ecoinometrics",
    read: "5m read",
    category: "featured",
    img: "/house.jpeg",
  },
  {
    title: "Understanding CI/CD for Backend Development",
    pub: "Devops",
    read: "13m read",
    category: "trending",
    img: "/house.jpeg",
  },
  {
    title: "Book Review: Blank Space",
    pub: "Noahpinion",
    read: "11m read",
    category: "trending",
    img: "/house.jpeg",
  },
  {
    title: "Black Friday Special: Why Most Startups Misread PMF",
    pub: "The Founders Corner",
    read: "9m read",
    category: "featured",
    img: "/house.jpeg",
  },
  {
    title: "HTTPS",
    pub: "ChainFeeds Research",
    read: "4m read",
    category: "trending",
    img: "/house.jpeg",
  },
];
export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>("featured");
  const filteredFeed =
    activeTab === "all" ? feed : feed.filter((f) => f.category === activeTab);
  return (
    <>
      <section className="border-b bg-white">
        <div className="max-w-6xl mx-auto py-8 md:py-12 px-4">
          <h1 className="text-2xl md:text-3xl">
            A space for independent thinking
          </h1>
          <p className="mt-2 text-muted-foreground">
            Discover cool experiences, growth and chance to join thoughtful
            contributions.
          </p>
          <div className="mt-6">
            <HeroTabs
              tabs={[
                { id: "featured", label: "Featured" },
                { id: "trending", label: "Trending" },
                { id: "all", label: "All" },
              ]}
              defaultTabId={activeTab}
              onChange={(id) => setActiveTab(id)}
            />
          </div>
        </div>
      </section>

      {/* <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeed.map((feed) => {
            return (
              <Card key={feed.title}>
                <CardContent className="p-0">
                  <Image
                    src={feed.img}
                    alt={feed.title}
                    width={800}
                    height={420}
                    className="h-40 w-full rounded-t-lg object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ProfileBadge>{feed.read}</ProfileBadge>
                      <span>&middot;</span>
                      <span>{feed.pub}</span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-tight">
                      {feed.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section> */}
    </>
  );
}
