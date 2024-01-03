"use client";

import { useState } from "react";

interface SearchBarProps {
  getCityWeather: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ getCityWeather }) => {
  const [city, setCity] = useState("");

  // console.log(city);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getCityWeather(city);
      }}
      className="w-full max-w-sm p-3"
    >
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="london"
          aria-label="Full name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Find
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
