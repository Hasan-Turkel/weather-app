"use client";
import React, { useState } from "react";
import moment from "moment";
import Mili from "miliseconds";

interface SearchBarProps {
  city: string;
  getCityDateWeather: (city: string, date: string) => void;
}

const DateChooser: React.FC<SearchBarProps> = ({
  city,
  getCityDateWeather,
}) => {
  const maxDate = new Date(+new Date() + new Mili().days(13).value());
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  return (
    <div className="p-2 ">
      <h1 className="text-xl">
        You can choose any of the next 14 days to see the weather forecast for a
        specific date.
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getCityDateWeather(city, date);
        }}
        className="w-full max-w-sm p-3"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="date"
            min={moment(new Date()).format("YYYY-MM-DD")}
            max={moment(maxDate).format("YYYY-MM-DD")}
            placeholder="london"
            aria-label="Full name"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Choose
          </button>
        </div>
      </form>
    </div>
  );
};

export default DateChooser;
