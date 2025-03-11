import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <Image
            className="size-16 rounded-full object-cover border"
            src="/assets/ken.jpeg"
            alt="Ken Mwangi"
            width={64}
            height={84}
            priority
          />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Ken Mwangi
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Full Stack Engineer
          </p>
        </div>
      </div>
    </>
  );
}
