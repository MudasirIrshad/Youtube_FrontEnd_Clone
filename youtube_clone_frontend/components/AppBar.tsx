import React from "react";
import SearchBar from "./SearchBar";
import { UserIcon } from "lucide-react";

function AppBar() {
  return (
    <div className="flex justify-between p-3">
      <div className="text-md flex items-center">Yotube</div>
      <div>
        <SearchBar />
      </div>
      <button className="text-md border rounded-2xl p-1 border-gray-500 flex items-center bg-gray-700 text-sm ">
        <UserIcon className="w-4 mr-1" /> SignIn
      </button>
    </div>
  );
}

export default AppBar;
