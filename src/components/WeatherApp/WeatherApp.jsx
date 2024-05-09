import React, { useState } from 'react'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/rain.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

import './WeatherApp.css'



const WeatherApp = () => {

    let api_key = "50817445cc37d0783799fdda3804cee0";

    const [Wicon,setWicon] = useState(cloud_icon);

  const search = async () =>{
    const element = document.getElementsByClassName('cityInput');
    if(element[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=50817445cc37d0783799fdda3804cee0&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json(); 
    const humidity = document.getElementsByClassName('humidity-percentage');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName('weather-temp')
    const location = document.getElementsByClassName('weather-location')

    humidity[0].innerHTML = data.main.humidity+ "%";
    wind[0].innerHTML = data.wind.speed+ "km/h";
    temperature[0].innerHTML = data.main.temp+ "°c";
    location[0].innerHTML = data.name;

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
        setWicon(clear_icon);
      }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon(cloud_icon);
      }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
        setWicon(drizzle_icon);
      }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
        setWicon(drizzle_icon);
      }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        setWicon(rain_icon);
      }
      else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        setWicon(rain_icon);
      }
      else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        setWicon(snow_icon);
      }
      else{
        setWicon(clear_icon);
      }
  }

  return (
    <div className='h-[100vh] grid place-content-center'>
      <div className='w-[400px] h-[500px] m-auto rounded-[12px] bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <div className="top-bar flex justify-center gap-[14px] pt-[60px]">
          <input type="text" className="cityInput flex w-[250px] h-[50px] bg-[#ebfffc] border-0 outline-none rounded-[48px] pl-[40px] text-stone-500 text-[16px] font-normal" placeholder='Search' />
          <div className="search-icon flex justify-center items-center w-[50px] h-[50px] bg-[#ebfffc] rounded-[40px]" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image mt-[29px] flex justify-center">
          <img src={Wicon} alt="" className='w-[130px]' />
        </div>
        <div className="weather-temp flex justify-center text-white text-[50px] font-bold">
          24°c
        </div>
        <div className="weather-location flex justify-center text-white font-normal text-[20px]">
          London
        </div>
        <div className="data-container mt-[50px] text-white flex justify-center">
          <div className="element m-auto flex items-start gap-[12px]">
            <img src={humidity_icon} alt="" className='icon' />
            <div className="data text-[16px] font-normal">
              <div className="humidity-percentage">
                65%
              </div>
              <div className="text text-[16px] font-normal">
                Humidity
              </div>
            </div>
          </div>
          <div className="element m-auto flex items-start gap-[12px]">
            <img src={wind_icon} alt="" className='icon' />
            <div className="data text-[16px] font-normal">
              <div className="wind-rate">
                18 km/h
              </div>
              <div className="text text-[16px] font-normal">
                Wind Speed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
