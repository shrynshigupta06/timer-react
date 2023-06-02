import React, { useState, useEffect } from "react";

import './TimerRow.css';


const TimerRow = (props) => {

    const { timer, index, setTimerList, timerList } = props;
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    // const [isTimerPaused, setIsTimerPaused] = useState(false);
    const [currTimer, setCurrTimer] = useState(timer);
    const [itrId, setItrId] = useState(null);

    // updates the value of timer list in local storage.
    useEffect(() => {
        let timerListFromLocalStorage = JSON.parse(window.localStorage.getItem('timerList'));
        timerListFromLocalStorage[index] = currTimer;
        window.localStorage.setItem('timerList', JSON.stringify(timerListFromLocalStorage));
    }, [currTimer, index]);

    const handleStopTimer = () => {
        clearInterval(itrId);
        console.log("stopped index: ", currTimer, index);
        setIsTimerRunning(false);
        setCurrTimer(() => "00:00:00")
    }

    const handlePauseTimer = () => {
        clearInterval(itrId);
        console.log("paused value: ", currTimer, index);
        setIsTimerRunning(false);
        // setIsTimerPaused(true);
    }

    const removeTimer = (index) => {
        // for (let timer of timer)
        // const allTimers = timerList.splice((el, idx) => idx !== i );
        // console.log("timerss: ", i, allTimers);

        // setTimerList((timerList) => {
        //     let ind;
        //     for (let timer of timerList) {
        //         console.log("timer", timer);
                
        //         if(timer.key1 === index) {
        //             ind = timer;
        //         }
        //     }
        //     timerList.splice(ind, 1);
        //     return timerList;
        // });

        console.log("index: index", timerList, typeof(index));
        const newTimers = [];
        for(let timer in timerList) {
            console.log("timer", typeof(timer));
            if(Number(timer) !== index) {
                newTimers.push(timerList[timer]);
            }
        }
        console.log("newTimers: ", newTimers)
        setTimerList(newTimers);
    }

    const handleStartTimer = () => {
        // setIsTimerPaused(false);
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
            setCurrTimer(() => `${newHH}:${newMM}:${newSS}`)
        }, 1000);
        setItrId(intervalTimer);
    }

    return (
        <div className="timer-list">
            <div>
                <li className="list-item">
                    {currTimer}
                    <span className='icons'>
                        {/* {(isTimerRunning && !isTimerPaused) ?
                            <>
                                <span className="material-icons bg-warning text-white" onClick={handlePauseTimer}>pause</span>
                                <span className="material-icons bg-warning text-white" onClick={handleStopTimer}>stop</span>
                            </>
                            : 
                            (!isTimerRunning && isTimerPaused) ?
                                <>
                                    <span className="material-icons bg-success text-white" onClick={handleStartTimer}>play_arrow</span>
                                    <span className="material-icons bg-warning text-white" onClick={handleStopTimer}>stop</span>
                                </>
                            :
                                <>
                                    <span className="material-icons bg-success text-white" onClick={handleStartTimer}>play_arrow</span>
                                    <span className="material-icons bg-danger text-white" onClick={() => removeTimer(index)}>delete</span>
                                </>
                        } */}
                        {isTimerRunning ?
                            <>
                                <span className="material-icons bg-warning text-white" onClick={handlePauseTimer}>pause</span>
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