import React, {useState, useRef, useEffect, useReducer} from 'react';
import './App.css';
import Block from './components/Block'
import {resReducer, initialStateRes, Context} from './resReducer'
import {refReducer, initialStateRef} from './refReducer'
import Game from './components/Game';


const  App = (props) => {
 const [result, dispatch] = useReducer(resReducer, initialStateRes)
 const [ref] = useReducer(refReducer, initialStateRef)
  return (
    <Context.Provider value={{result, ref, dispatch}}>
      <div className="App">
        <Game/>
      </div>
      <h1>Nasty</h1>
      <h1>lalala</h1>
    </Context.Provider>
  );
}

export default App;
