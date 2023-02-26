import React, { useEffect, useState } from "react";
import { weatherRequest } from "../../js/async/weatherRequest";
import "./HeaderInput.css";
import { useDispatch, useSelector } from "react-redux";
import { cityNow, cityDetails } from "../../js/reduxTollKitSlice/reduxTollkitSlice";



function HeaderInput() {
  const detail = useSelector(state => state.now)
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
 
  const handleWeatherRequest = () => {
    let response = weatherRequest(city);
    response.then((result) => {
      const now = {
        temp: result.main.temp, 
        name: result.name, 
        icon:result.weather[0].icon}
      dispatch(cityNow({now}));

      const details = {
        name: result.name,
        temp: result.main.temp,
        feelLike: result.main.feels_like,
        weather: result.weather[0].description,
        sunrice: result.sys.sunrise,
        sunset: result.sys.sunset, 
      }
      dispatch(cityDetails(details))
    });
    setCity("");
  };

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleWeatherRequest();
        }}
        className="search_form"
      >
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="Entry city"
          className="search_input"
          value={city}
        ></input>
        <button className=" search_button">🔎</button>
      </form>
    </div>
  );
}

export default HeaderInput;
