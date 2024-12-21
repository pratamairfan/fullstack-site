import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/toggle-dark";
import { Navbar, NavbarAdmin, NavbarUser } from "@/components/ui/navbar";
import { SelectPersonal } from "@/components/ui/select-personal";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { SignOut } from "./signout-button";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 transform shadow-sm border-bdr-default border-b">
      <div className="flex justify-between h-16 px-8 items-center relative z-40 backdrop-blur-sm transition-opacity w-full">
        <div className="hidden lg:flex lg:gap-4 lg:items-center">
          <div className="flex flex-col">
            <h1 className="text-xl">SiStory</h1>
            <span className="text-xs text-transparent bg-gradient-to-br bg-clip-text from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2]">
              Site STO Inventory
            </span>
          </div>
          <span className="text-5xl font-thin text-bdr-default">/</span>
          <nav className="block">
            <div className="flex justify-center items-center gap-4">
              <SelectPersonal imageUrl="">
                <SelectGroup>
                  <SelectLabel>Personal account</SelectLabel>
                  <SelectItem value="1"></SelectItem>
                </SelectGroup>
              </SelectPersonal>
            </div>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="z-[99] bg-surface-75 shadow-md border-none"
          >
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex flex-col items-start gap-2 text-lg font-semibold"
              >
                {/* <Image priority className='w-24' src={logo} alt='logo' /> */}
                <h1 className="text-xl">SiStory</h1>
                <span className="text-xs text-transparent bg-gradient-to-br bg-clip-text from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2]">
                  Site STO Inventory
                </span>
              </Link>
              <div className="flex justify-center items-center gap-4">
                <SelectPersonal imageUrl="">
                  <SelectGroup>
                    <SelectLabel>Personal account</SelectLabel>
                    <SelectItem value="1" aria-checked={true}></SelectItem>
                  </SelectGroup>
                </SelectPersonal>
              </div>

              <NavbarUser />
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex gap-4 justify-center items-center">
          <ModeToggle />
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
