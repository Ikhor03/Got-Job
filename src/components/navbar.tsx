"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";

export default function Headercomp() {
  return (
    <>
      <Navbar rounded>
        <Navbar.Brand href="https://ikhor.vercel.app/" className="mr-3">
          <Image src={"/gotJob.png"} alt="GotJob Logo" width={100} height={80} />
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Dropdown inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="">
          <Navbar.Link href="/" className="font-bold md:py-2 md:px-3 md:hover:bg-gray-200 rounded-full">
            Lowongan Pekerjaan
          </Navbar.Link>
          <Navbar.Link href="/#" className="font-bold md:py-2 md:px-3 md:hover:bg-gray-200 rounded-full">
            Perusahaan
          </Navbar.Link>
          <Navbar.Link href="/#" className="font-bold md:py-2 md:px-3 md:hover:bg-gray-200 rounded-full">
            Blog
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
