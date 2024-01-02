"use client"
import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar';
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()
  const [cityWeather, setWeather] = useState({

    location:{
      region:"",
      country:"",
      name:""
    },
    current:{
      temp_c:"",
      feelslike_c:"",
      humidity:"",
      wind_kph:"",
      condition:{
        icon:"",
        text:""
      }
    },
    
  })
  
  const getCityWeather = async (city:string) => {
    const API_KEY = process.env.NEXT_PUBLIC_apiKey;
    const URL = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;
    try {
      
      const { data } = await axios.get(URL);
      // console.log(data);
      setWeather(data)
     
    } catch (error:any) {
      
      console.log(error.message);
    }
    
  }
  let city = "london"
  useEffect(() => {
    getCityWeather(city);
  }, []);
  

 

  // console.log(cityWeather);
  
  return (

  <main className='flex flex-col justify-center items-center h-screen gap-3'>
    <SearchBar getCityWeather={getCityWeather}/>
 <div className='min-w-80 w-1/2 p-2'>
  <h1 className='text-2xl font-bold'>{cityWeather.location.region}</h1>
  <h2 className='font-semibold'>{cityWeather.location.country}</h2>
  <div className='flex justify-between'>
    <div>
    <p>Now</p>
    <h1 className='text-2xl'>{cityWeather.current.temp_c}°C</h1>
    <p>Feels Like {cityWeather.current.feelslike_c}°C</p>
    </div>
    <img src={cityWeather.current.condition.icon} alt="icon" width="100"/>
    <div>
      <p className='text-xl'>{cityWeather.current.condition.text}</p>
      <p>Humidity: %{cityWeather.current.humidity}</p>
      <p>Wind: {cityWeather.current.wind_kph} kph</p>
    </div>
    </div>
 </div>

 <button className="bg-yellow-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => {
        router.push(cityWeather.location.name);
      }}>
  See the Forecast
</button>
 </main>
  )
}
