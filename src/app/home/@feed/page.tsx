
import UseCard from "@/components/card";

export default async function Feed() {
  let jobs: Jobs[] = [];
  await fetch("https://www.arbeitnow.com/api/job-board-api")
    .then((response) => response.json())
    .then((result) => (jobs = result.data))
    .catch((error) => console.log("error", error));

  return (
    <>
      <div className="gap-4 col-span-12 md:col-start-1 md:col-end-6 pl-4">
        {jobs.map((job) => (
          <UseCard key={job.slug} jobs={job} />
        ))}
      </div>
    </>
  );
}
