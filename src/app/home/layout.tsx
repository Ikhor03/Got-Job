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

      <div className="footer col-span-12 p-6">
        {/* Footer content */}
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}