import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ToDo from './Components/ToDo';
import Post from './Components/Posts';
import Photo from './Components/Photo';
import Users from './Components/Users';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Slice from './Components/Slice';
import SliceReducer from './Components/Slice';




const store = configureStore({
  reducer: {
    tasks: SliceReducer,
    posts: SliceReducer,
    Users: SliceReducer,
   
    
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes>
        
          <Route path='/ToDo' element={<ToDo />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Photo' element={<Photo />} />
         
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);