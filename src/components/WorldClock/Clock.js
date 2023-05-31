import React, { useState } from 'react';

import CountryList from './CountryList';
import DisplayTime from './DisplayTime';
import './Clock.css';


const Clock = () => {

  const [countryList, setCountryList] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("Asia/Kolkata");

  return (
    <div className='main-container'>
      <div>
        <h2>World Clock</h2>
      </div>
      <div className='clock-container'>
        <CountryList list={countryList} setList={setCountryList} setCurrentCountry={setCurrentCountry}></CountryList>
        <DisplayTime currentCountry={currentCountry}></DisplayTime>
      </div>
    </div>
  )
}

export default Clock;