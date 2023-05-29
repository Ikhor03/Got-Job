import HeaderComp from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* component */}
      <div className="mx-auto grid grid-cols-12 gap-4 bg-gray-800 min-h-screen">
        <div className="header col-span-12">
          {/* Header content */}
          <header>
            <HeaderComp />
          </header>
        </div>

        <div className="col-span-12 text-center">
          <Link href='/home' className="h-10  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
            Let's Get the Job &rarr;
          </Link>
        </div>

        <div className="footer col-span-12 p-6">
          {/* Footer content */}
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
}
