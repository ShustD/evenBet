import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blocks } from './components/Blocks/Blocks';


export const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blocks />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

