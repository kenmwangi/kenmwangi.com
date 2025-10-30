import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-12">
            Ken Mwangi
          </Link>
          <div className="mt-auto hidden lg:block">
            <div className="flex flex-wrap items-center gap-5">
              <p className="text-[#ddffdc] whitespace-nowrap text-sm">
                &copy; Ken Mwangi, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
        <section className="grid gap-x-5 text-sm sm:grid-cols-3">
          <div className="border-l border-[rgba(221,255,220,0.30)] pl-4 sm:col-span-2">
            <p>Products</p>
            <p>
              <Link href="#" className="border-[rgba(221,255,220,0.60)]">
                Technical Writing
              </Link>
            </p>
          </div>
          <div className="border-l border-[rgba(221,255,220,0.30)] pl-4 pt-16 sm:pt-0">
            <p>Products</p>
          </div>
          <div className="border-l border-[rgba(221,255,220,0.30)] pl-4 pt-16 sm:col-span-2">
            <p>Products</p>
          </div>
          <div className="border-l border-[rgba(221,255,220,0.30)] pl-4 pt-16">
            <p>Products</p>
          </div>
        </section>
      </div>
      <div className="pt-16 lg:hidden">
        <div className="flex flex-wrap items-center gap-5">
          {/* <Link
            href="/"
            className="fill-[#ddffdc] bg-[#ddffdc] p-1 rounded-full flex-shrink flex items-center justify-center"
          >
            <X className="text-black" />
          </Link> */}
          <p className="text-[#ddffdc] whitespace-nowrap text-sm">
            {" "}
            &copy; Ken Mwangi, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
