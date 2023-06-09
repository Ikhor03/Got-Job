import { getJobs } from "@/api/callApi";
import UseCard from "@/components/card";
import DetailJob from "@/components/detail";

export default async function Default() {
  const res = await getJobs();
  const jobs = await res;
  const job: Jobs = jobs.data[20];

  return (
    <>
      <div className="hidden md:block col-start-6 md:col-end-13 sticky top-3 overflow-y-auto h-screen">
        <DetailJob job={job} />
      </div>
      {/* <h1>'belajar dulu cara routing'</h1> */}
    </>
  );
}
