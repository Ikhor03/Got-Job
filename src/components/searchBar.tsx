"use client";

export default function SearchBar() {
  return (
    <>
      <form className="flex gap-4 md:flex-row flex-col items-center">
        <div className="pl-2 flex items-center w-sc90 md:w-80 bg-white rounded-lg">
          <label htmlFor="what" className="font-medium mr-2">
            What
          </label>
          <input className="flex rounded-lg p-2.5 text-sm border-0 focus:ring-transparent" id="what" placeholder="job title, keyword, company" type="text" />
        </div>
        <div className="pl-2 flex items-center w-sc90 md:w-80 bg-white rounded-lg">
          <label htmlFor="what" className="font-medium mr-2">
            Where
          </label>
          <input className="flex rounded-lg w-full p-2.5 text-sm border-0 focus:ring-transparent" id="where" placeholder="city, province, or region" type="text" />
        </div>
        <button type="submit" className="w-sc90 h-10 md:w-20 bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
          Search
        </button>
      </form>
    </>
  );
}
