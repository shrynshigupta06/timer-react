import React, { useState } from "react";

import TimerRow from './TimerRow'
import './TimerList.css';
import AddTimerPopup from "./AddTimerPopup";


const TimerList = () => {

    const [timerList, setTimerList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const removeTimer = (i) => {
        const allTimers = [...timerList];
        allTimers.splice(i, 1);
        setTimerList(allTimers);
    }

    const handleAddTimerButtonClick = () => {
        setShowPopup(true)
    }

    return (
        <div className="main-container">
            <div>
                <h2>Count Down Timer</h2>
            </div>
            {timerList.map((timer, idx) => {
                return (
                    <TimerRow key={idx} index={idx} timer={timer} removeTimer={removeTimer} />
                )
            })}
            <div>
                <button className="btn btn-primary add-button" onClick={handleAddTimerButtonClick}>Add New Timer</button>
            </div>

            {showPopup ?
                <AddTimerPopup setShowPopup={setShowPopup} setTimerList={setTimerList}></AddTimerPopup>
                :
                <></>
            }
        </div>
    )
}

export default TimerList;