import { useState } from "react";
import {v4 as uuid} from 'uuid';

import './AddTimerPopup.css';

const AddTimerPopup = ({ setShowPopup, setTimerList }) => {

    const [currTimerValue, setCurrTimerValue] = useState('');

    const handleSubmitTimer = (event) => {
        let numberRegex = /[0-9]{2}:[0-5][0-9]:[0-5][0-9]/g

        if (!numberRegex.test(currTimerValue)) {
            alert("Invalid Timer, try again");
            setCurrTimerValue(() => '');
        } else {
            setShowPopup(false);
            // let timerToBeInserted = {
            //     value: currTimerValue,
            //     isRunning: false,
            //     isPaused: false,
            //     id: timerList ? timerList.length + 1 : 1
            // }
            // setTimerList(timerList ? [...timerList, timerToBeInserted] : [timerToBeInserted]);
            // setTimerList(timerList ? [...timerList, {timer: currTimerValue, key1: uuid()}] : [{timer: currTimerValue, key1: uuid()}]);
            setTimerList((timerList) => [...timerList, currTimerValue]);

        }
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className="popup" id="popup">
            <input className="set-time-field" type="text" placeholder="Enter time hh:mm:ss" value={currTimerValue} onChange={(event) => { setCurrTimerValue(event.target.value) }} autoFocus/>
            <div className="btn-div">
                <button type="submit" className="btn btn-success popup-button" onClick={handleSubmitTimer}>Set</button>
                <button type="submit" className="btn btn-secondary popup-button" onClick={closePopup}>Close</button>
            </div>
        </div>
    )
}

export default AddTimerPopup;