import React, { useEffect } from "react";
import "./FavoritCities.css";
import { nanoid } from "nanoid";
import { weatherRequest } from "../../../../js/async/weatherRequest";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoritList } from "../../../../js/reduxTollKitSlice/reduxTollkitSlice";


function FavoritCities() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.favorit.list)


  const deleteCity = (currentCity) => {
    dispatch(deleteFavoritList(currentCity))
  }
  
  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(list))
  }, [list])

  return (
    list.map((item) => (
      <div key={nanoid()} className="add_save_city">
        <div className="add_save_city_name">
          {item.name}
        </div>
        <button onClick={() => deleteCity(item.name)} className="delete_button">
          ❌
        </button>
      </div>
    )))
    
   
}

export default FavoritCities;
