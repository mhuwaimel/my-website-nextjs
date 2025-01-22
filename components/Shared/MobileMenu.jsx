import React from "react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import MobileActiveLink from "./mobile-active-link";

const MobileMenu = ({ showSubMenu, setShowSubMenu, setMobileMenu }) => {
  const menuData = [
    { id: 1, name: "عــني", url: "/" },
    { id: 2, name: "الخبرات المهنية", url: "/experience" },
    { id: 3, name: "أعمـالي", url: "/projects" },
    { id: 4, name: "GitHub", url: "/github" },
    { id: 5, name: "تـواصل", url: "/contact" },
  ];

  return (
    <ul
      className="flex flex-col pt-2 md:hidden  absolute top-[50px] 
    right-0 w-full h-[calc(100vh-50px)]  bg-white border-t text-black"
    >
      {menuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                aria-label={item.name}
                className="relative flex flex-col px-5 py-4 border-b cursor-pointer"
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <AlignLeft size={14} />
                </div>
              </li>
            ) : (
              <li
                className="px-5 py-4 transition duration-200 ease-in-out border-b hover:scale-105"
                onClick={() => setMobileMenu(false)}
              >
                {/* <Link className="font-[Changa] text-base " href={item.url}>
                  {item.name}
                </Link> */}
                <MobileActiveLink href={item.url}>{item.name}</MobileActiveLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
