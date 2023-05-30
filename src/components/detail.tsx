"use client";

import { Tooltip } from "flowbite-react";
import Link from "next/link";

type Props = {
    job : Jobs
}

export default function DetailJob({job} : Props) {
    const date = new Date(job.created_at * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    function getDesc() {
      return { __html: job.description };
    };

    const randomColor = () => {
      const arr = ["text-blue-500", "text-yellow-500", "text-pink-500", "text-lime-500", "text-blue-500"];
      const random = Math.floor(Math.random() * arr.length);
      return arr[random];
    };

  return (
    <div>
      <div className="bg-gray-700 shadow-md flex justify-start items-center sticky top-0">
        <Link href={`/apply/${job.slug}`} className="w-40 h-10 m-3 text-center font-semibold bg-pink-600 py-1 px-2 rounded-lg hover:bg-pink-700">
          APPLY NOW
        </Link>
        <a href={job.url} className="text-lime-500 hover:underline font-medium text-lg">
          see company
        </a>
      </div>

      <div className="group bg-gray-900 p-4 mb-5 transition-all duration-300 shadow-xl lg:p-8">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-gray-50">{job.title}</h3>
            <span className="text-xs text-gray-300">{job.location}</span>
            {job.job_types.map((type, i) => (
              <span key={i} className={`m-1 ml-0 inline-block ${randomColor()}`}>{type}</span>
            ))}
          </div>

          <div className="flex flex-col items-right justify-end mb-7 text-right">
            <h3 className="text-xl mb-3 font-medium text-gray-200">{job.company_name}</h3>
            <span className="text-sm font-medium text-gray-100">{`uploaded: ${day}/${month}/${year}`}</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-white text-sm font-medium">
            <h4 className="font-bold text-lg">Description</h4>
            <hr></hr>
            <div dangerouslySetInnerHTML={getDesc()} className="mt-3 leading-8 indent-4"></div>
          </div>
          <h4 className=" text-white font-bold text-lg mt-5">Salary</h4>
          <hr></hr>
          <div className="mt-2 text-sm text-gray-400">$ 50K - 70K per year</div>
          <div className="m-2 text-center">
            <button className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
              <Tooltip content="Save">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </Tooltip>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
