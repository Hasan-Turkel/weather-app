import Image from 'next/image'
import { getCityWeather } from "@/helpers/weatherFuncs"

export default async function Home() {

  const city = "london"
  const cityWeather = await getCityWeather(city);

  // console.log(cityWeather);
  
  return (

  <main className='flex justify-center items-center h-screen'>
    
 <div className='min-w-80 w-1/2 p-2'>
  <h1 className='text-2xl font-bold'>{cityWeather.location.region}</h1>
  <h2 className='font-semibold'>{cityWeather.location.country}</h2>
  <div className='flex justify-between'>
    <div>
    <p>Now</p>
    <h1 className='text-2xl'>{cityWeather.current.temp_c}°C</h1>
    <p>Feels Like {cityWeather.current.feelslike_c}°C</p>
    </div>
    <img src={cityWeather.current.condition.icon} alt="icon" />
    <div>
      <p className='text-xl'>{cityWeather.current.condition.text}</p>
      <p>Humidity: %{cityWeather.current.humidity}</p>
      <p>Wind: {cityWeather.current.wind_kph} kph</p>
    </div>
    </div>
  
 </div>
 </main>
  )
}
