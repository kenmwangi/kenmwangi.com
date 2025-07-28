import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-normal text-foreground mb-2">
              Apply to Y Combinator
            </h1>
            <p className="text-muted-foreground">Fall 2025 Batch</p>
          </div>

          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              Y Combinator is accepting applications for the{" "}
              <span className="font-semibold">Fall 2025 Batch</span> funding
              cycle. The batch will{" "}
              <span className="font-semibold">
                take place from October to December in San Francisco
              </span>
              .
            </p>

            <p className="text-foreground leading-relaxed">
              The deadline to apply on-time is{" "}
              <span className="font-semibold">August 4 at 8pm PT</span>; if you
              apply before the deadline, you will get a decision by{" "}
              <span className="font-semibold">September 5</span>. If you apply
              after the deadline, we will still consider the application but
              can't promise exactly when we'll get back to you.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-normal text-foreground mb-4">
                About applying to YC
              </h2>

              <ol className="space-y-4 text-foreground leading-relaxed">
                <li className="flex">
                  <span className="font-semibold mr-2">1.</span>
                  <span>
                    If you want to apply, please submit your{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      application
                    </a>{" "}
                    online.
                  </span>
                </li>

                <li className="flex">
                  <span className="font-semibold mr-2">2.</span>
                  <span>
                    People who applied before the regular deadline will hear
                    back by <span className="font-semibold">September 5</span>.
                    If you apply after the deadline, we'll still consider the
                    application but can't promise exactly when we'll get back to
                    you.
                  </span>
                </li>

                <li className="flex">
                  <span className="font-semibold mr-2">3.</span>
                  <span>
                    We encourage you to submit your application as soon as
                    you're ready to apply.
                  </span>
                </li>

                <li className="flex">
                  <span className="font-semibold mr-2">4.</span>
                  <span>
                    If your application is promising, we will invite you to
                    interview with us. Most interviews will be held by video
                    conference in{" "}
                    <span className="font-semibold">August and September</span>.
                    We typically make decisions the same day as your interview,
                    and we give everyone who interviews detailed feedback on
                    their application.
                  </span>
                </li>
              </ol>

              <div className="mt-8">
                <p className="text-foreground leading-relaxed">
                  Towards the end of the batch, we help companies raise
                  additional funds by introducing them to YC's extensive network
                  of investors.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold">
                    YC doesn't end after 3 months.
                  </span>{" "}
                  We continue to help founders for the life of their company,
                  and beyond — and so does the YC alumni community. Read more{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    here
                  </a>
                  .
                </p>
              </div>

              <div className="mt-6">
                <p className="text-foreground leading-relaxed">
                  If you have other questions, reach out via{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    email
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Apply to Fall 2025
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Made sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Apply to Fall 2025
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Not ready to apply this batch?
              </p>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Sign up for reminders to apply next batch.
              </a>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-foreground mb-3">Related</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Y Combinator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Founder Ethics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Requests for Startups
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
