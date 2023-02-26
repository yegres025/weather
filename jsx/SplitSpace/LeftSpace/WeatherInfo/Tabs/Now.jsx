import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { favoritList } from '../../../../../js/reduxTollKitSlice/reduxTollkitSlice';

function Now(props) {
  const [cityList, setCityList] = useState([]);
  const nowInfo = useSelector((state) => state.now);


  const dispatch = useDispatch();

  const addCityList = () => {
    const currentCity = {
      name: nowInfo.now.name,
      id: nanoid()
    }
    dispatch(favoritList(currentCity))
  };

  

  
  return (
    <div className={props.className}>
      <div className='weather_temperature_block'>
        <div className='weather_temperature'>
          {Math.round(nowInfo.now.temp) + '°'}
        </div>
      </div>
      <img
        className='weather_icon'
        src={`https://openweathermap.org/img/wn/${nowInfo.now.icon}@2x.png`}
      />
      <div className='weather_target_city'>
        <div className='weather_city'>{nowInfo.now.name}</div>
        <button onClick={() => addCityList()} className='like_button'>
          ♡
        </button>
      </div>
    </div>
  );
}

export default Now;
