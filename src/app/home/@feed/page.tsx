import { getJobs } from "@/api/callApi";
import UseCard from "@/components/card";

export default async function Feed() {
  const jobsData = await getJobs();
  const jobs = await jobsData;
  let limit = 0;
  const truncateData = jobs.data.filter((e : Jobs, i : number) => {
    limit++;
    return limit < 20
  })

  return (
    <>
      <div className="gap-4 col-span-12 md:col-start-1 md:col-end-6 pl-4">
        {truncateData.map((job: Jobs, id : number) => (
          <UseCard key={id} jobs={job} />
        ))}
      </div>
    </>
  );
}
