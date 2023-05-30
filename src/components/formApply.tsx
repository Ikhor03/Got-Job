import { PhoneIcon, InboxIcon, PhotoIcon, UserCircleIcon, DocumentIcon } from "@heroicons/react/24/outline";
import Headercomp from "./navbar";
import Link from "next/link";
import Image from "next/image";
type Props = {
  user: User;
  job: Jobs;
};

export default function FormApply({ user, job }: Props) {
  return (
    <div>
      <form action="#">
        <div className="col-span-12 h-24 md:col-start-5 md:col-end-12 bg-gray-900 p-4 border-x border-blue-500 border-b-gray-500">
          <div className="flex justify-between items-end">
            <div className="w-16">
              <Image src={user.picture.thumbnail} alt={user.name.title} width={50} height={50}/>
            </div>
            <h1 className="text-pink-500 font-semibold">{`${user.name.title} ${user.name.last}`}</h1>
            <InboxIcon className="text-lime-500 h-5" />
            <p className="text-lime-500">{user.email}</p>
            <PhoneIcon className="text-yellow-500 h-5" />
            <p className="text-yellow-500">{user.cell}</p>
          </div>
        </div>

        <div className="col-span-12 md:col-start-5 md:col-end-12 bg-gray-900 p-4 border-x border-blue-500">
          <div className="text-center flex flex-col justify-start">
            <DocumentIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 text-sm leading-6 text-gray-400">
              <label htmlFor="file-upload" className="cursor-pointer rounded-md bg-white font-semibold text-pink-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-pink-600 focus-within:ring-offset-2 hover:text-pink-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-400">PDF, DOC., Docx up to 10MB</p>
          </div>
        </div>

        <fieldset className="col-span-12 md:col-start-5 md:col-end-12 items-center bg-gray-900 border-x border-blue-500">
          <div className="bg-gray-700 p-4 py-5 h-32">
            <legend className="font-bold text-xl leading-6 text-gray-200">Question from company (required)</legend>
            <p className="mt-1 text-sm leading-6 text-gray-400 w-2/3 pt-2">Solve these questions and show the employer that you are a suitable and serious candidate.</p>
          </div>

          <div className=" py-2 px-4">
            <h2 className="text-white font-semibold  pb-5">How many years' experience do you have with this role? </h2>
            <select name="quest" id="quest" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6 ">
              <option value="select">select</option>
              <option value="No experience">No experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1 year">1 year</option>
              <option value="2 year">2 year</option>
              <option value="3 year">3 year</option>
              <option value="4 year">4 year</option>
              <option value="5 year">5 year</option>
              <option value="More than 5 year">More than 5 year</option>
            </select>
          </div>

          <div className="py-2 px-4">
            <h2 className="text-white font-semibold pt-7">How would you rate your English language skills?</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input id="speak-skill" name="push-notifications" type="checkbox" className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-600" />
                <label htmlFor="speak-skill" className="block text-sm font-medium leading-6 text-gray-200">
                  Speak Proficiently in a proffesional setting
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input id="write-skill" name="push-notifications" type="checkbox" className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-600" />
                <label htmlFor="write-skill" className="block text-sm font-medium leading-6 text-gray-200">
                  Write peoficiently in proffesional setting
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input id="limited-skill" name="push-notifications" type="checkbox" className="h-4 w-4 border-gray-300 text-pink-600 focus:ring-pink-600" />
                <label htmlFor="limited-skill" className="block text-sm font-medium leading-6 text-gray-200">
                  Limited Proficiency
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 px-4">
            <label htmlFor="about" className="block text-md font-medium leading-6 text-gray-200">
              Promote yourself (recomended)
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full h-32 rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-gray-800"
                placeholder={`Tell the company why you are suitable for this position. Mention specific skills and how you contribute to the company. Avoid generic terms like "I am responsible"`}
              />
            </div>
            <p className="mt-3 text-sm text-end leading-6 text-gray-400">Write a few sentences about yourself.</p>
          </div>
          <div className="my-4 mx-auto h-0.5 w-11/12 bg-gray-500" />
        </fieldset>

        <div className="px-4 py-2 col-span-12 md:col-start-5 md:col-end-12 items-center bg-gray-900 border-x border-blue-500">
          <p className="mt-1 text-sm leading-6 text-gray-400">
            All personal information that you submit as part of your application will be used in accordance with our
            <a href="#" className="text-lime-500">
              {" "}
              Privacy Statement
            </a>
            .
          </p>
          <p className="mt-4 mb-2 text-xs leading-6 text-gray-400">
            By pressing the "Submit Application" button, I have read and agree to
            <a href="#" className="text-lime-500">
              {" "}
              GoJob's rules regarding invitations for interviews
            </a>
          </p>

          <div className="flex gap-4 py-7 justify-center">
            <Link href="/home" className="rounded-md bg-pink-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
