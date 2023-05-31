import React, { useEffect } from 'react';

import { getCountryList } from '../api';
import './CountryList.css';


const CountryList = (props) => {

    useEffect(() => {
        getCountryList().then(countryListResponse => props.setList(countryListResponse));
    }, []);

    return (
        <div className='choose-country-div'>
            <label className='country-label'>Choose Country</label>
            <div>
                <select className="form-select" placeholder='Select your country' name="country list" defaultValue={null} id='countryDropdown' onChange={(event) => props.setCurrentCountry(event.target.value)}>
                    {props.list.map((country, idx) => {
                        return <option value={country} key={`${idx}-abc`}> {country.toUpperCase()} </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default CountryList;