"use client";
import React from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";
import { Settings, House, History, Receipt } from "@/icon";
import UsageTrack from "./UsageTrack";
import _ from "lodash";
import Link from "next/link";

const MenuList = [
  {
    id: nanoid(),
    Icon: House,
    label: "Home",
    pathName: "/dashboard",
  },
  {
    id: nanoid(),
    Icon: History,
    label: "History",
    pathName: "/dashboard/history",
  },
  {
    id: nanoid(),
    Icon: Receipt,
    label: "Billing",
    pathName: "/dashboard/billing",
  },
  {
    id: nanoid(),
    Icon: Settings,
    label: "Settings",
    pathName: "/dashboard/settings",
  },
];

function SideNav() {
  const path = usePathname();

  return (
    <div className="w-full h-screen p-5 border-r border-primary relative">
      <div className="flex justify-start items-center gap-2 border-b-2 border-primary pb-2">
        <Image src={"./logo.svg"} alt="logo" width={28} height={28} />
        <h2 className="text-xl text-primary font-bold">copy.mug</h2>
      </div>
      <div className="w-full flex justify-start items-center gap-2 flex-col mt-10">
        {_.map(MenuList, ({ id, Icon, label, pathName }) => {
          return (
            <Link
              href={pathName}
              key={id}
              className={`w-full flex justify-start items-start gap-2 p-3 border-0 rounded cursor-pointer ${
                _.isEqual(path, pathName)
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-[#ffa55e]"
              }`}
            >
              <Icon className="text-sm" />
              <span className="text-base font-semibold">{label}</span>
            </Link>
          );
        })}
      </div>
      <UsageTrack />
    </div>
  );
}

export default SideNav;
