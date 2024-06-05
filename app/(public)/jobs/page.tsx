import * as z from "zod";

import { JobSchema } from "@/schemas";
import { getPublicJobs } from "@/data/job";
import { publicJobColumns } from "@/components/tables/public-job-columns";
import { PublicJobTable } from "@/components/tables/public-Job-table";

interface RetrievedJob extends z.infer<typeof JobSchema> {
  id: string;
  createdAt: Date;
}

export default async function JobsPage() {
  const jobsData = await getPublicJobs();
  const jobs: RetrievedJob[] = jobsData as RetrievedJob[];

  return (
    <div className="">
      <div className="bg-white w-full mb-16">
        <PublicJobTable data={jobs} columns={publicJobColumns} />
      </div>
    </div>
  );
}
