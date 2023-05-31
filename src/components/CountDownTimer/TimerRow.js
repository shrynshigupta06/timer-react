import React, { useState } from "react";

import './TimerRow.css';


const TimerRow = (props) => {

    const { timer, index, removeTimer } = props;
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [currTimer, setCurrTimer] = useState(timer);
    const [itrId, setItrId] = useState(null);

    const handleStopTimer = () => {
        clearInterval(itrId);
        setIsTimerRunning(false);
        setCurrTimer("00:00:00")
    }

    const handleStartTimer = () => {
        setIsTimerRunning(true);
        let [hh, mm, ss] = currTimer.split(":");
        hh = parseInt(hh);
        mm = parseInt(mm);
        ss = parseInt(ss);

        let newTimer = ss;
        if (hh !== 0) {
            newTimer += 3600 * hh;
        }
        if (mm !== 0) {
            newTimer += 60 * mm;
        }
        if (newTimer <= 0) {
            setIsTimerRunning(false)
            return;
        }

        let intervalTimer = setInterval(() => {
            newTimer--;
            if (newTimer <= 0) {
                clearInterval(intervalTimer)
            }
            let newHH = Math.floor(newTimer / 3600);
            let newMM = Math.floor(newTimer % 3600 / 60);
            let newSS = Math.floor(newTimer % 3600 % 60);
            if (newHH < 10) newHH = `0${newHH}`;
            if (newMM < 10) newMM = `0${newMM}`;
            if (newSS < 10) newSS = `0${newSS}`;
            setCurrTimer(`${newHH}:${newMM}:${newSS}`)
        }, 1000);
        setItrId(intervalTimer);
    }

    return (
        <div className="timer-list">
            <div>
                <li className="list-item">
                    {currTimer}
                    <span className='icons'>
                        {isTimerRunning ?
                            <>
                                <span className="material-icons bg-warning text-white" onClick={handleStopTimer}>stop</span>
                            </>
                            :
                            <>
                                <span className="material-icons bg-success text-white" onClick={handleStartTimer}>play_arrow</span>
                                <span className="material-icons bg-danger text-white" onClick={() => removeTimer(index)}>delete</span>
                            </>
                        }
                    </span>
                </li>
            </div>
        </div>
    )
}

export default TimerRow;