import Headercomp from "@/components/navbar";

export default function HomeLayout({
  children, feed, detail 
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  detail: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid grid-cols-12  gap-4 bg-gray-800">
      {children}
      {detail}
      {feed}
      <div className="col-span-12 md:col-start-1 md:col-end-6 pl-3 text-center">
        <button type="submit" className="w-11/12 h-10  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
          See more
        </button>
      </div>

      <div className="footer col-span-12 p-6">
        {/* Footer content */}
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}