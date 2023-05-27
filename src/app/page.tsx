import UseCard from "@/components/card";
import DetailJob from "@/components/detail";
import HeaderComp from "@/components/navbar";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <>
      {/* component */}
      <div className="mx-auto grid grid-cols-12  gap-4 bg-gradient-conic">
        <div className="header col-span-12 rounded-lg border">
          {/* Header content */}
          <header>
            <HeaderComp />
          </header>
          <div className="md:flex justify-center mt-7 ">
            <SearchBar />
          </div>
          <h2 className="text-center text-xl font-bold mt-10">Job Feed</h2>
          <div className="w-80 h-1 bg-amber-500 m-auto"></div>
          <div className="w-full border-solid border border-gray-400 bg-gray-500 opacity-50 m-auto"></div>
          <div />
        </div>

          <div className="col-span-12 md:col-start-1 md:col-end-5 pl-3">
            <div className="grid grid-rows-2 gap-4 ">
              <UseCard />
              <UseCard />
            </div>
          </div>
          <div className="hidden md:block col-start-5 md:col-end-13 sticky top-3 overflow-y-auto h-screen">
            <DetailJob />
          </div>
          <div className="col-span-12 md:col-start-1 md:col-end-5 pl-3">
            <div className="grid grid-rows-2 gap-4">
              <UseCard />
              <UseCard />
            </div>
          </div>

        <div className="col-span-12 md:col-start-1 md:col-end-5 pl-3 text-center">
          <button type="submit" className="w-11/12 h-10  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
            See more
          </button>
        </div>

        <div className="footer col-span-12 p-6">
          {/* Footer content */}
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
}
