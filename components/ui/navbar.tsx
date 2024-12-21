"use client";

import { usePathname } from "next/navigation";
import { Archive, Building, ClipboardList, Home, Settings } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Dropdown from "@/components/ui/dropdown";
import Link from "next/link";

export const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className='flex flex-col justify-between items-start lg:items-center gap-6 h-16'>
      <Link
        className={`w-full p-2 hover:bg-teal-600 hover:rounded-md hover:text-background ${
          currentPath === "/dashboard"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/dashboard'>
        <div className='flex items-center gap-2'>
          <Home className='w-5 h-5' /> Home
        </div>
      </Link>
      <Link
        className={`p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
          currentPath === "/permit"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/permit'>
        <div className='flex items-center gap-2'>
          <ClipboardList className='w-5 h-5' /> Permit
        </div>
      </Link>
      <Dropdown
        align='start'
        icon={<Archive className='w-5 h-5' />}
        buttonLabel='Inventory'>
        <DropdownMenuItem className='z-50'>
          <Link
            className={`text-background p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
              currentPath === "/inventory/site"
                ? "bg-teal-500 text-background rounded-md"
                : ""
            }`}
            href='/inventory/site'>
            <div className='flex items-center gap-2'>
              <Building className='w-5 h-5' /> Site
            </div>
          </Link>
        </DropdownMenuItem>
      </Dropdown>
    </div>
  );
};

export const NavbarAdmin = () => {
  const currentPath = usePathname();

  return (
    <div className='flex flex-col justify-between items-start lg:items-center gap-6 h-16'>
      <Link
        className={`w-full p-2 hover:bg-teal-600 hover:rounded-md hover:text-background ${
          currentPath === "/dashboard"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/dashboard'>
        <div className='flex items-center gap-2'>
          <Home className='w-5 h-5' /> Home
        </div>
      </Link>
      <Link
        className={`p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
          currentPath === "/permit"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/permit'>
        <div className='flex items-center gap-2'>
          <ClipboardList className='w-5 h-5' /> Permit
        </div>
      </Link>
      <Dropdown
        className={`p-2 flex items-center justify-start cursor-pointer gap-2 hover:bg-teal-500 hover:text-background w-full rounded-md ${
          currentPath === "/inventory/site"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        align='start'
        icon={<Archive className='w-5 h-5' />}
        buttonLabel='Inventory'>
        <DropdownMenuItem>
          <Link
            className={`p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
              currentPath === "/inventory/site"
                ? "bg-teal-500 text-background rounded-md"
                : ""
            }`}
            href='/inventory/site'>
            <div className={`flex items-center gap-2`}>
              <Building className='w-5 h-5' /> Site
            </div>
          </Link>
        </DropdownMenuItem>
      </Dropdown>

      <Link
        className={`p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
          currentPath === "/settings"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/settings'>
        <div className='flex items-center gap-2'>
          <Settings className='w-5 h-5' /> Settings
        </div>
      </Link>
    </div>
  );
};

export const NavbarUser = () => {
  const currentPath = usePathname();

  return (
    <div className='flex flex-col justify-between items-start lg:items-center gap-6 h-16'>
      <Link
        className={`w-full p-2 hover:bg-teal-600 hover:rounded-md hover:text-background ${
          currentPath === "/dashboard"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/dashboard'>
        <div className='flex items-center gap-2'>
          <Home className='w-5 h-5' /> Home
        </div>
      </Link>
      <Link
        className={`p-2 hover:bg-teal-600 hover:rounded-md hover:text-background w-full ${
          currentPath === "/permit"
            ? "bg-teal-500 text-background rounded-md"
            : ""
        }`}
        href='/permit'>
        <div className='flex items-center gap-2'>
          <ClipboardList className='w-5 h-5' /> Permit
        </div>
      </Link>
    </div>
  );
};
