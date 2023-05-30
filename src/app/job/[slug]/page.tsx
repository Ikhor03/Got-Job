import { getJobs } from "@/api/callApi";
import DetailJob from "@/components/detail";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Detail({ params: { slug } }: Props) {
  const res = await getJobs();
  const jobs = await res;
  const job: Jobs = jobs.data.find((e: Jobs) => e.slug === slug);

  return (
    <>
      <div className="sticky top-3 overflow-y-auto h-screen">
        <div className="sticky top-2 z-10">
          <Link href="/home" className="text-yellow-500 font-semibold tracking-widest absolute right-8 top-4">
            Explore jobs &rarr;
          </Link>
        </div>
        <DetailJob job={job} />
      </div>
    </>
  );
}
