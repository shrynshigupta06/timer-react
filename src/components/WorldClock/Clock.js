import React, { useState, useEffect } from 'react';

import CountryList from './CountryList';
import DisplayTime from './DisplayTime';
import './Clock.css';


const Clock = () => {

  const [countryList, setCountryList] = useState([]);
  let [currentCountry, setCurrentCountry] = useState("");

  useEffect(() => {
    const countryTimeFromLocalStorage = JSON.parse(window.localStorage.getItem('currentCountry'));
    if (countryTimeFromLocalStorage) {
      setCurrentCountry(countryTimeFromLocalStorage.country);
    }
    else 
      setCurrentCountry("Asia/Kolkata");
  }, [])

  return (
    <div className='main-container'>
      <div>
        <h2>World Clock</h2>
      </div>
      <div className='clock-container'>
        <CountryList list={countryList} setList={setCountryList} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry}></CountryList>
        <DisplayTime currentCountry={currentCountry}></DisplayTime>
      </div>
    </div>
  )
}

export default Clock;