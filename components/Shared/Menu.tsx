import React from "react";
import { AlignLeft } from "lucide-react";
import ActiveLink from "./active-link";

interface MenuItem {
  id: number;
  name: string;
  url: string;
  subMenu?: MenuItem[];
}

interface MenuProps {
  showSubMenu: boolean;
  setShowSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ showSubMenu, setShowSubMenu }: MenuProps) => {
  const menuData: MenuItem[] = [
    { id: 1, name: "عــني", url: "/" },
    { id: 2, name: "الخبرات المهنية", url: "/experience" },
    { id: 3, name: "أعمـالي", url: "/projects" },
    { id: 4, name: "GitHub", url: "/github" },
    { id: 5, name: "تـواصل", url: "/contact" },
  ];

  return (
    <ul className="items-center hidden gap-8 text-base font-bold text-black md:flex">
      {menuData?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                aria-label="menu"
                className="relative flex items-center gap-2 cursor-pointer "
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                {item.name}
                <AlignLeft size={14} />
              </li>
            ) : (
              <li
                aria-label="Menu Item"
                className="transition duration-300 ease-in-out cursor-pointer hover:scale-110"
              >
                {/* <Link className="font-[Almarai]" href={item.url}>
                  {item.name}
                </Link> */}
                <ActiveLink href={item.url}>{item.name}</ActiveLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
