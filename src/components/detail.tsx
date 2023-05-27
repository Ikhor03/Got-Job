"use client";

import { Tooltip } from "flowbite-react";
import Image from "next/image";

export default function DetailJob() {
  return (
    <div>
      <div className="bg-amber-950 flex justify-start items-center">
        <button type="submit" className="w-44 h-10 m-3  bg-amber-500 font-medium py-1 px-2 rounded-lg hover:bg-amber-600">
          APPLY NOW
        </button>
        <button className="mx-3 text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
          <Tooltip content="Save">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </Tooltip>
        </button>

        <a href="#" className="text-amber-500 font-medium text-lg">
          Open in new tab
        </a>
      </div>

      <div className="group bg-gray-900 p-4 mb-5 transition-all duration-300 shadow-xl lg:p-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-gray-50">Senior Content Creator</h3>
            <span className="text-xs text-gray-300">New location, Jakarta</span>
            <span className="text-sm font-medium text-gray-50">Full Time</span>
          </div>
          <div className="">
          {/* kasih logo disini */}
            <Image src={'/gotJob.png'} alt="company.name" width={100} height={80}/>
          </div>
          <div className="flex flex-col items-right justify-end mb-7 text-right">
            <h3 className="text-xl mb-3 font-medium text-gray-200">PT. Ketuk Love</h3>
            <span className="text-sm font-medium text-gray-100">uploaded: 2 days ago</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-white text-sm font-medium">
            <h4 className="font-bold">Description</h4>
            <hr></hr>
            <p className="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt labore velit ipsum libero? Cum, ut aperiam praesentium, doloremque est non corporis quam voluptatibus recusandae molestiae fuga voluptates explicabo deserunt optio
              voluptas iure hic officia dolorem exercitationem quasi? Nobis quae eaque delectus expedita! Quam et eum vitae itaque magnam, rem possimus, est necessitatibus quia maiores alias temporibus cum explicabo? Quod dolores harum
              facilis exercitationem, explicabo atque ducimus! Accusantium iste ratione maiores atque nostrum obcaecati aliquam rerum pariatur voluptatibus ex facilis omnis unde numquam fugit quidem quasi facere aperiam harum fugiat non
              blanditiis, at quis ea eveniet. Soluta quos incidunt voluptate quibusdam.
            </p>
            <h4 className="font-bold mt-5">requirment</h4>
            <hr></hr>
            <p className="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt labore velit ipsum libero? Cum, ut aperiam praesentium, doloremque est non corporis quam voluptatibus recusandae molestiae fuga voluptates explicabo deserunt optio
              voluptas iure hic officia dolorem exercitationem quasi? Nobis quae eaque delectus expedita! Quam et eum vitae itaque magnam, rem possimus, est necessitatibus quia maiores alias temporibus cum explicabo? Quod dolores harum
              facilis exercitationem, explicabo atque ducimus! Accusantium iste ratione maiores atque nostrum obcaecati aliquam rerum pariatur voluptatibus ex facilis omnis unde numquam fugit quidem quasi facere aperiam harum fugiat non
              blanditiis, at quis ea eveniet. Soluta quos incidunt voluptate quibusdam.
            </p>
          </div>
            <h4 className=" text-white font-bold mt-5">Salary</h4>
            <hr></hr>
          <div className="mt-2 text-sm text-gray-400">IDR 5M - 7M per mounth</div>
        </div>
      </div>
    </div>
  );
}
