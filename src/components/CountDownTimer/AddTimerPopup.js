import { useState } from "react";

import './AddTimerPopup.css';

const AddTimerPopup = ({ setShowPopup, setTimerList }) => {

    const [currTimerValue, setCurrTimerValue] = useState('')

    const handleSubmitTimer = (event) => {
        let numberRegex = /[0-9]{2}:[0-5][0-9]:[0-5][0-9]/g

        if (!numberRegex.test(currTimerValue)) {
            alert("Invalid Timer, try again");
            setCurrTimerValue('');
        } else {
            setShowPopup(false);
            setTimerList((timerList) => [...timerList, currTimerValue]);
        }

    }

    return (
        <div className="popup" id="popup">
            <input className="set-time-field" type="text" placeholder="Enter time hh:mm:ss" value={currTimerValue} onChange={(event) => { setCurrTimerValue(event.target.value) }} />
            <button type="submit" className="btn btn-success set-time-button" onClick={handleSubmitTimer}>Set</button>
        </div>
    )
}

export default AddTimerPopup;