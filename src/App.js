import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TimerList from './components/CountDownTimer/TimerList';
import Header from './components/Header';
import Clock from './components/WorldClock/Clock';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<TimerList />}></Route>
            <Route path="/world-clock" element={<Clock />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
