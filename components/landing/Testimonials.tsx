import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "I'm absolutely floored by the level of care and attention to detail Ken has put into this project and for one can guarantee that we will be a return customer.",
      author: "Sarah Johnson",
      role: "CTO, African Real Estate",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      content:
        "To say that hiring Ken has been life-changing is an understatement. My business has tripled and I got my life back.",
      author: "Michael Odhiambo",
      role: "Founder, TechNairobi",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${index === 0 ? "sm:-ms-4" : ""} py-6 sm:px-4`}
          >
            <blockquote>
              <span className="text-sm text-gray-800 dark:text-neutral-200">
                {testimonial.content}
              </span>

              <footer className="mt-3">
                <div className="flex items-center gap-x-2">
                  <Image
                    className="shrink-0 size-5 rounded-full"
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={20}
                    height={20}
                  />
                  <div className="grow">
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
