"use server"
const API_KEY = process.env.NEXT_PUBLIC_apiKey;

export const getCityWeather = async (city:string) => {
    const URL = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;
    const res = await fetch(URL, {cache:"no-store"});
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const  results  = await res.json();
    return results;
  };