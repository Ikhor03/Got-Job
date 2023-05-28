import DetailJob from "@/components/detail";

type Props = {
  params: {
    id: string;
  };
};

export default async function Detail({ params: { id } }: Props) {
  const res = await fetch("https://www.arbeitnow.com/api/job-board-api");
  const jobs = await res.json();
  const job: Jobs = jobs.data.find((e: Jobs) => e.slug === id);
  // const job : Jobs = jobs && jobs.find(e => e.slug === id);

  return (
    <>
      <div className="hidden md:block col-start-6 md:col-end-13 sticky top-3 overflow-y-auto h-screen">
        <DetailJob job={job} />
      </div>
    </>
  );
}
