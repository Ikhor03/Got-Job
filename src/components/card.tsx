"use client";

import { Tooltip } from "flowbite-react";
import Link from "next/link";

type Props = {jobs : Jobs}

export default function UseCard({jobs} : Props) {
    const date = new Date(jobs.created_at * 1000);
    const timeDiff = Math.abs(new Date().getTime() - date.getTime());
    const uploaded = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    function getDesc() {
        return { __html: jobs.description };
    }

    const randomColor = () => {
        const arr = ["text-blue-500", "text-yellow-500", "text-pink-500", "text-lime-500", "text-blue-500"];
        const random = Math.floor(Math.random() * arr.length)
        return arr[random];
    }

  return (
    <Link href={`/home/${jobs.slug}`} >
      <div className="group active:bg-amber-900 cursor-pointer bg-gray-900 hover:scale-105 transition-transform ease-in-out duration-400 my-5 p-4 lg:p-8 rounded-lg">
        {/* Love Icon */}
        <div className="mb-3 text-right">
          <button className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
            <Tooltip content="Save">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </Tooltip>
          </button>
        </div>

        <div className="flex items-center gap-x-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-50">{jobs.title}</h3>
            <span className="text-xs text-gray-300">{jobs.location}</span>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-medium text-gray-200">{jobs.company_name}</h3>
          <div className="text-sm font-medium">
            {jobs.job_types.map((type) => (
                <span className={`m-1 ml-0 inline-block ${randomColor()}`}>{type}</span>
            ))}
          </div>
          <div className="my-2 text-sm text-gray-400">$ 50K - 70K per year</div>
          <div dangerouslySetInnerHTML={getDesc()} className="text-gray-300 text-xs h-44 w-full truncate"></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-50">{jobs.tags.join(', ')}</span>
          <span className="text-sm font-medium text-gray-100">{`${uploaded} days ago`}</span>
        </div>
      </div>
    </Link >
  );
}
