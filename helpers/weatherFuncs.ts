const API_KEY = process.env.API_KEY;

export const getCityWeather = async (city:"london") => {
    const URL = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;
    const res = await fetch(URL);
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const  results  = await res.json();
    return results;
  };