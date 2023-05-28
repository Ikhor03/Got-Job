import Headercomp from "@/components/navbar";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <div className="header col-span-12">
      {/* Header content */}
      <header>
        <Headercomp />
      </header>
      <div className="md:flex justify-center mt-7 ">
        <SearchBar />
      </div>
      <h2 className="text-center text-white text-xl font-bold mt-10">Job Feed</h2>
      <div className="w-80 h-1 bg-amber-500 m-auto"></div>
      <div className="w-full border-solid border border-gray-400 bg-gray-500 opacity-50 m-auto mb-8"></div>
      <div />
    </div>
  );
}
