"use client"
import moment from 'moment'
import Mili from "miliseconds";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface CityForecastProps {
  params:{
    city:string
  } }

const CityForecast:React.FC<CityForecastProps>  = ({ params:{city} }) => {
  const router = useRouter()
  const [cityWeather, setWeather] = useState<any>([])

  const getCityWeather = async (city:string) => {
    const API_KEY = process.env.NEXT_PUBLIC_apiKey;
    const URL = `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=1&key=${API_KEY}`;
    try {
      
      const { data } = await axios.get(URL);
      // console.log(data);
      setWeather(data)
     
    } catch (error:any) {
      
      console.log(error.message);
    }
    
  }
  useEffect(() => {
    getCityWeather(city);
  }, []);

  console.log(cityWeather);
  

 const maxDate = new Date(+new Date()+(new Mili).days(13).value())

  return (
    // <input type="date" min={moment(new Date()).format("YYYY-MM-DD")} max={moment(maxDate).format("YYYY-MM-DD")}  />
<>
    <main className='flex flex-wrap gap-4 justify-center p-3'>
      {
      cityWeather?.forecast?.forecastday[0]?.hour?.map((item:any, i:number)=>(<div className='flex border shadow-lg rounded-2xl flex-col items-center gap-2 p-2 w-60' key={i}>

        <h1>{item.time}</h1>
        <img src={item.condition.icon} alt="icon" width="50"/>
        <h1>{item.temp_c}°C</h1>
        <h1>{item.condition.text}</h1>
      </div>))
    }
    </main>
    <button className="bg-yellow-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded fixed bottom-3 right-3" onClick={() => {
        router.push("/");
      }}>
    Go Back
</button>
    </>



  )
}

export default CityForecast