import React, { useEffect } from 'react';

import { getCountryList } from '../api';
import './CountryList.css';


const CountryList = (props) => {

    const { list, setList, currentCountry, setCurrentCountry } = props;

    useEffect(() => {
        let countryListFromLocalStorage = window.localStorage.getItem('countryList');
        setList(JSON.parse(countryListFromLocalStorage));
        if(!countryListFromLocalStorage) {
            getCountryList().then(countryListResponse => {
                setList(countryListResponse);
                window.localStorage.setItem('countryList', JSON.stringify(countryListResponse));
            });
        }
    }, []);

    const handleCurrentCountryChange = (event) => {
        setCurrentCountry(event.target.value);
    }

    return (
        <div className='choose-country-div'>
            <label className='country-label'>Choose Country</label>
            <div>
                <select className="form-select" placeholder='Select your country' name="country list" id='countryDropdown' value={currentCountry} onChange={handleCurrentCountryChange}>
                    {list && list.map((country, idx) => {
                        return <option value={country} key={idx}> {country.toUpperCase()} </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default CountryList;