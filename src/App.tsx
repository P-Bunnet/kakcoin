import React, {useState,useEffect} from 'react';

import './App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from './components/Home';
import CoinDetail from './components/CoinDetail';
import NotFound from './components/NotFound';


function App() {
  

  return (
    <BrowserRouter force>
    <div className='text-gray-600  bg-blue-100 '>
      
      <div>
        {/* <h1 className="kakcoin">KAKCoin</h1> */}
        <div>
        <nav className="bg-red-400 px-4 p-4 md:bg-blue-600 text-white">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <div>
                <p>KAKCOIN</p>
              </div>

            <div className='pl-5'>
                <Link to='/' className='pr-4'>Home</Link>
                <a href=""  className='pr-4'>About</a>
                <a href=""  className='pr-4'>Contact</a>
            </div>
        </div>
        <div>
          <img src="../popcat.gif" alt="logo" className='rounded-full flex items-center justify-center h-8 w-8'/>
        </div>
        
        <div className='flex justify-start'>
        
        <div className="search-box">
          <button className="btn-search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
          <input type="text" className="input-search" placeholder="Type to Search..."/>
          </div>
        <div className='pl-5'><Login/></div>   
        </div>

    </div>
</nav>
        </div> 
        {/* // end nav */} 
        <Switch forceRefresh>
        <Route path='/' component={Home} exact/>
        <Route path='/coin/:id' component ={CoinDetail}/>
        <Route component={NotFound}/>
        </Switch>

      </div>
     
      
    </div>
    </BrowserRouter>
  );
  
}

export default App;
