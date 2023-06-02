import React, { useState, useEffect } from "react";

import TimerRow from './TimerRow'
import './TimerList.css';
import AddTimerPopup from "./AddTimerPopup";


const TimerList = () => {

    const [timerList, setTimerList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    // fetches the previous state of timers from local storage.
    useEffect(() => {
        let timerListFromLocalStorage = JSON.parse(window.localStorage.getItem('timerList'));
        console.log("timerListFromLO: ", timerListFromLocalStorage)
        if(timerListFromLocalStorage)
            setTimerList(timerListFromLocalStorage);
    }, []);


    // saves any new timer into the local storage.
    useEffect(() => {
        console.log("hiii;;", JSON.stringify(timerList));
        window.localStorage.setItem('timerList', JSON.stringify(timerList));
        // setTimerList(timerList);
    }, [timerList]);
    



    const handleAddTimerButtonClick = () => {
        setShowPopup(true)
    }

    return (
        <div className="main-container">
            <div>
                <h2>Count Down Timer</h2>
            </div>
            {timerList && timerList.map((timer, idx) => {
                return (
                    <TimerRow key={idx} index={idx} timer={timer} timerList={timerList} setTimerList={setTimerList} />
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