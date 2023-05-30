export const getUserRandom =async () => {
  const res =  await fetch("https://www.randomuser.me/api/", {next: {revalidate: 60}});
    return res.json();
};

export async function getJobs() {
  const res = await fetch(`https://www.arbeitnow.com/api/job-board-api`);
  return res.json();
};