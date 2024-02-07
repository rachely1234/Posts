import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { lazy } from 'react';
import Printlisttodo from './Components/Printlisttodo';
import React from 'react';
import MyDropeZone from './Components/Try';




function App() {
  return (
    <>
    
    <NavBar/>
    
    <MyDropeZone/>
    </>
  );
}

export default App;
