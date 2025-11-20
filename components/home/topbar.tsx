export default function TopBanner() {
  return (
    <section className="bg-neutral-50 px-4 py-3 md:py-2">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm">
          <span className="font-medium">v1.0</span>
          <span className="text-muted-foreground mx-2">
            New features and improvements coming soon
          </span>
        </p>
      </div>
    </section>
  );
}
