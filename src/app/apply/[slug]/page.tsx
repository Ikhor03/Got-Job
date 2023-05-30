import FormApply from "@/components/formApply";
import { getJobs, getUserRandom } from "@/api/callApi";
import UseCard from "@/components/card";
import Headercomp from "@/components/navbar";

type Props = {
  params: {
    slug: string;
  };
};

export default async function apply({ params: { slug } }: Props) {
  const userData = getUserRandom();
  const jobData = getJobs();
  const resUser = await userData;
  const jobs = await jobData;

  const user: User = resUser.results[0];
  const job: Jobs = jobs.data.find((e: Jobs) => e.slug === slug);

  return (
    <>
      <Headercomp user={user} />
      <div className="grid grid-cols-12 bg-gray-800">
        <div className="col-start-2 col-end-5">
          <UseCard jobs={job} />
        </div>
        <div className="col-start-6 col-end-12">
          <FormApply user={user} job={job} />
        </div>
      </div>
    </>
  );
}
