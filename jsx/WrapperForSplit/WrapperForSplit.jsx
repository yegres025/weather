import React from 'react';
import Left from '../SplitSpace/LeftSpace/WeatherInfo/Left';
import Right from '../SplitSpace/RightSpace/Right';
import { useState } from 'react';
import './WrapperForSplit.css';

function WrapperForSplit(props) {
  const [cityList, setCityList] = useState([]);

  const handleCityList = (list) => {
    if (!list) {
      return;
    }
    return setCityList(list);
  };

  const deleteCity = (e) => {
    const currentCity = e.target.parentNode.children[0].textContent;
    setCityList(cityList.filter((item) => item.name !== currentCity));
  };

  return (
    <div className='weather_halfs'>
      <Left className='info' />

      <Right deleteCity={deleteCity} cityList={cityList} />
    </div>
  );
}

export default WrapperForSplit;

// export async function weatherRequest(item) {
//   const url = `${ELEMENTS.serverUrl}?q=${item}&appid=${ELEMENTS.apiKey}&units=metric`;

//   let promise = await fetch(url);

//   const result = await promise.json();

//   return result;
// }
