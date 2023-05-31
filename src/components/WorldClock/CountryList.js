import React, { useEffect } from 'react';

import { getCountryList } from '../api';
import './CountryList.css';


const CountryList = (props) => {

    const { list, setList, setCurrentCountry } = props;

    useEffect(() => {
        getCountryList().then(countryListResponse => setList(countryListResponse));
    });

    return (
        <div className='choose-country-div'>
            <label className='country-label'>Choose Country</label>
            <div>
                <select className="form-select" placeholder='Select your country' name="country list" id='countryDropdown' onChange={(event) => setCurrentCountry(event.target.value)}>
                    <option defaultValue={null}>Select country</option>
                    {list.map((country, idx) => {
                        return <option value={country} key={idx}> {country.toUpperCase()} </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default CountryList;