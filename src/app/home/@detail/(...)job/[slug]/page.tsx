import { getJobs } from "@/api/callApi";
import DetailJob from "@/components/detail";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Detail({ params: { slug } }: Props) {
  const jobData = getJobs();
  const jobs = await jobData;
  const job: Jobs = jobs.data.find((e: Jobs) => e.slug === slug);

  return (
    <>
      <div className="col-span-12 md:col-start-6 md:col-end-13 sticky md:top-3 overflow-y-auto h-screen">
        <DetailJob job={job} />
      </div>
    </>
  );
}
