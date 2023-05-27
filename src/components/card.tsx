"use client";

import { Card, Tooltip } from "flowbite-react";

export default function UseCard() {
  return (
    <div>
      <div className="group active:bg-amber-900 cursor-pointer bg-gray-900 p-4 transition-all duration-400 lg:p-8 rounded-lg">
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
            <h3 className="text-2xl font-bold text-gray-50">Senior Content Creator</h3>
            <span className="text-xs text-gray-300">New location, Jakarta</span>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-medium text-gray-200">PT. Ketuk Love</h3>
          <div className="text-sm font-medium">
            <span className="m-1 ml-0 inline-block text-blue-500">Creative</span>
            <span className="m-1 ml-0 inline-block text-yellow-500">Ad. Premiere</span>
            <span className="m-1 ml-0 inline-block text-pink-500">Photography</span>
            <span className="m-1 ml-0 inline-block text-lime-500">VFX</span>
            <span className="m-1 ml-0 inline-block text-blue-500">Illustrator</span>
          </div>
          <div className="mt-2 text-sm text-gray-400">IDR 5M - 7M per mounth</div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-50">Full Time</span>
          <span className="text-sm font-medium text-gray-100">2 days ago</span>
        </div>
      </div>
    </div>
  );
}
