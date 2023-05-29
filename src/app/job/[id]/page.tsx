import DetailJob from "@/components/detail";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function Detail({ params: { id } }: Props) {
  const res = await fetch("https://www.arbeitnow.com/api/job-board-api");
  const jobs = await res.json();
  const job: Jobs = jobs.data.find((e: Jobs) => e.slug === id);
  // console.log(job);

  return (
    <>
      <div className="hidden md:block sticky top-3 overflow-y-auto h-screen">
        <Link href='/home' className="text-gray-900 font-semibold tracking-widest absolute z-10 right-8 top-4">Explore jobs &rarr;</Link>
        <DetailJob job={job} />
      </div>
    </>
  );
}
