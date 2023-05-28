type Jobs = {
  slug: string;
  title: string;
  description: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>>;
  url: string;
  company_name: string;
  created_at: number;
  job_types: [string];
  location: string;
  remote: boolean;
  tags: [string];
};