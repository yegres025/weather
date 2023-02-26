import React from 'react';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

function Details(props) {
  const details = useSelector((state) => state.details);

  return (
    <div className={props.className}>
      <div className='target_city_for_info'>{details.name || 'loading info'}</div>
      <div className='city_full_info'>
        <div className=''>Temperature: {details.temp || 'loading info'}</div>
        <div className=''>Feel Like: {details.feelLike}</div>
        <div className=''>Weather: {details.weather || 'loading info'}</div>
        <div>Sunrice: {details.sunrice !== undefined ? format(new Date(details.sunrice *1000), 'HH:mm') : 'loading info'}</div>
        <div>Sunset:{details.sunset!== undefined ? format(new Date(details.sunset *1000), 'HH:mm') : 'loading info'}</div>
      </div>
    </div>
  );
}

export default Details;
