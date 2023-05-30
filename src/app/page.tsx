import { getUserRandom } from "@/api/callApi";
import Headercomp from "@/components/navbar";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Home() {
  const getuser = await getUserRandom();
  const result = await getuser;
  const user = result.results[0];

  return (
    <>
      {/* component */}
      <div className="mx-auto grid grid-cols-12 gap-4 bg-gray-800 min-h-screen">
        <div className="header col-span-12">
          {/* Header content */}
          <header>
            <Headercomp user={user} />
          </header>
        </div>

        <div className="col-start-6 col-end-8 text-center flex justify-center items-center h-10  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
          <Link href="/home" className="">
            Let's Get the Job
          </Link>
          <ArrowRightIcon className="h-5" />
        </div>

        <div className="footer col-span-12 p-6">
          {/* Footer content */}
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
}
