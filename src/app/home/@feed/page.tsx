import { getJobs } from "@/api/callApi";
import UseCard from "@/components/card";

export default async function Feed() {
  const res = await getJobs();
  const jobs = await res;

  let limit = 20;
  const loadMore = () => {
    limit = limit + 10;
  };

  const LoadData = jobs.data.filter((e: Jobs, i: number) => {
    i++;
    return i <= limit;
  });

  return (
    <>
      <div className="gap-4 col-span-12 md:col-start-1 md:col-end-6 pl-4">
        {LoadData.map((job: Jobs, id: number) => (
          <UseCard key={id} jobs={job} />
        ))}
      </div>
      <div className="col-span-12 md:col-start-1 md:col-end-6 pl-3 text-center">
        <button type="submit" className="w-11/12 h-10  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
          See more
        </button>
      </div>
    </>
  );
}
