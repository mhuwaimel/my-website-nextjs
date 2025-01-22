"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignLeft, X, Mail } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const sendMail = () => {
    const mailAdress = process.env.NEXT_PUBLIC_MY_CONTACT_EMAIL;
    const subject = encodeURIComponent("Mail from My Website");
    const link = `mailto:${mailAdress}?&subject=${subject}`;
    window.location.href = link;
  };
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="w-full h-[50px] md:h-[80px] bg-[#ffffff] flex items-center justify-between px-8 transition-transform duration-300">
      <div className="flex items-center text-2xl text-gray-800 cursor-pointer">
        <Link href={"/"}>
          <Image
            src="/assets/logo32.png"
            alt="logo"
            priority
            width={32}
            height={32}
            className="aspect-auto"
          />
        </Link>
        <Link
          className="mr-2 font-bold tracking-widest text-gray-900 rounded fill-current ltr:ml-2 dark:text-gray-100"
          style={{ fontFamily: "vibes", fontSize: "1.5rem" }}
          href={"/"}
        >
          محمد الهويمل
        </Link>
      </div>

      <Menu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />

      {mobileMenu && (
        <MobileMenu
          showSubMenu={showSubMenu}
          setShowSubMenu={setShowSubMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="flex items-center gap-2 text-black">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-label="contact me">
              <div className="flex items-center gap-4 ">
                <a
                  href="#"
                  aria-label="contact me"
                  className="p-2 rounded-full contact-icon hover:bg-gray-200"
                  onClick={sendMail}
                >
                  <Mail color="#6936f5" />
                </a>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-[cairo]">تواصل معي Contact</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Language Button */}

        {/* <Tooltip placement="top" trigger="hover" content="English | عربي">
          <div className="flex items-center gap-4 ">
            <button
              type="button"
              data-tooltip-target="tooltip-default"
              className="p-2 rounded-full contact-icon hover:bg-gray-200"
            >
              <BsTranslate className="fill-[#6936f5]" />
            </button>
          </div>
        </Tooltip> */}
        <div
          className="w-10 md:w-24 h-10 md:h-24 rounded-full flex md:hidden 
        justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -ml-2"
        >
          {mobileMenu ? (
            <X className="text-[20px]" onClick={() => setMobileMenu(false)} />
          ) : (
            <AlignLeft
              className="text-[26px] "
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
