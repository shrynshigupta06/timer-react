import { useEffect, useState } from 'react';

import { getCurrentTimeByCountry } from '../api';
import './DisplayTime.css';


const DisplayTime = (props) => {

    const { currentCountry } = props;

    const [displayTime, setDisplayTime] = useState('')
    const [offset, setOffset] = useState("+00:00");
    let [datetime, setDatetime] = useState("");

    useEffect(() => {
        const selectedCountryFromLocalStorage = JSON.parse(window.localStorage.getItem('currentCountry'));
        if(!(selectedCountryFromLocalStorage && selectedCountryFromLocalStorage.country === currentCountry))
            getCurrentTimeByCountryName(currentCountry);
    }, [])

    useEffect(() => {
        if (!currentCountry) return
        setDisplayTime("");
        // const selectedCountryFromLocalStorage = JSON.parse(window.localStorage.getItem('currentCountry'));
        // if(!(selectedCountryFromLocalStorage && selectedCountryFromLocalStorage.country === currentCountry))
        //     getCurrentTimeByCountryName(currentCountry);
        getCurrentTimeByCountryName(currentCountry);
    }, [currentCountry]);

    const getCurrentTimeByCountryName = (currentCountry) => {
        getCurrentTimeByCountry(currentCountry)
            .then(countryTimeObj => {
                console.log("reposne:", countryTimeObj);
                if(countryTimeObj) {
                    setDatetime(countryTimeObj['datetime']);
                    setOffset(countryTimeObj.utc_offset);
                    window.localStorage.setItem('currentCountry', JSON.stringify({country: currentCountry, value: JSON.stringify(countryTimeObj)}));
                }
            });
    }

    useEffect(() => {
        let timer = setInterval(function showTime() {
            let offsetMinutes;
            if (offset[0] === "+") {
                let [h, m] = offset.replace("+", "").split(":").map(el => Number(el));
                offsetMinutes = h * 60 + m;
            } else {
                let [h, m] = offset.replace("-", "").split(":").map(el => Number(el));
                offsetMinutes = -1 * (h * 60 + m)
            }
            let now = new Date();
            let tempDate2 = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                now.getUTCHours(), now.getUTCMinutes() + offsetMinutes, now.getUTCSeconds());;

            setDisplayTime(tempDate2.toLocaleString());

        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [datetime])


    return (
        <div className="digital-clock">
            <div>
                <span className='current-time-span'>Current Time:</span>
            </div>
            <div>{displayTime}</div>
            <div>{displayTime ? currentCountry : ''}</div>
        </div>
    )
}

export default DisplayTime;