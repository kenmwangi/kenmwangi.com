import { Card, CardContent } from "./hero-card";
import ProfileAvatar from "./profile-avatar";

export default function Essays() {
  return (
    <section className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl">Great discussions</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Join the most interesting and insightful discussions.
        </p>
        <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <ProfileAvatar
                  src="/ken-mwangi.jpeg"
                  alt="Ken Mwangi"
                  size={36}
                />
                <div>
                  <div className="text-sm font-medium">Ken Mwangi</div>
                  <p className="text-xs text-muted-foreground">1h ago</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Still no voice. Going forward say something meaningful once and
                see changes in your next thought.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
