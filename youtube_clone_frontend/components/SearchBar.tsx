"use client";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden sm:flex w-72 md:w-96 items-center border rounded-2xl border-gray-500 p-1 justify-between">
        <input
          type="search"
          id="default-search"
          className="bg-transparent ml-2 w-full border-none outline-none"
          placeholder="Search..."
          required
        />
        <button type="submit" className="">
          <SearchIcon className="w-4 mr-2" />
        </button>
      </div>
      <div>
        {!isOpen ? (
          <>
            {" "}
            <button
              type="submit"
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden"
            >
              <SearchIcon className="w-4 mr-2" />
            </button>
          </>
        ) : (
          <div className="md:hidden w-36 flex items-center border rounded-2xl border-gray-500 p-1 justify-between">
            <input
              type="search"
              id="default-search"
              className="bg-transparent ml-2 w-full border-none outline-none"
              placeholder="Search..."
              required
            />
            <button type="submit" className="">
              <SearchIcon
                onClick={() => setIsOpen(!isOpen)}
                className="w-4 mr-2"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
