export default function Articles() {
  const articles = [
    {
      id: 1,
      year: "2024",
      title: "The complete guide to microservices with Golang",
      description:
        "How to make microservices work for your company using Golang and AWS.",
      link: "#",
    },
    {
      id: 2,
      year: "2024",
      title: "Enhancement in Cloud Infrastructure",
      description:
        "With the aim of optimizing cloud resources and boosting performance, I leveraged AWS's powerful tools and expertise to deliver exceptional results.",
      link: "#",
    },
    {
      id: 3,
      year: "2023",
      title: "How to implement CI/CD pipelines for microservices",
      description:
        "A comprehensive guide to setting up CI/CD pipelines for microservices architecture.",
      link: "#",
    },
  ];

  return (
    <section id="articles" className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Articles
      </h2>

      <ul className="space-y-10">
        {articles.map((article) => (
          <li key={article.id}>
            <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
              {article.year}
            </p>
            <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
              {article.title}
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              {article.description}
            </p>
            <p className="mt-1">
              <a
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
                href={article.link}
              >
                Continue reading
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
