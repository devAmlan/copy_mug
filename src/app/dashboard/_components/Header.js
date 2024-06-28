import React from "react";
import { Search } from "@/icon";

function Header() {
  return (
    <div className="w-full flex justify-between items-center px-5 py-3">
      <div className="w-1/3 flex gap-2 items-center p-2 border rounded-md">
        <Search />
        <input
          type="text"
          className="flex-1 text-base outline-none bg-transparent"
          placeholder="Search..."
        />
      </div>
      <div>
        <p className="bg-primary py-1 px-2 rounded-md text-xs text-white">
          Join Membership just at 9$
        </p>
      </div>
    </div>
  );
}

export default Header;
