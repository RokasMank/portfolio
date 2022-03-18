import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { fetchData } from './Actions/Actions';
import firebase from './Firebase/firebase'
function App(props:any) {
 var bla = fetchData(5);
 const storageRef = firebase.storage().ref('projects')
 useEffect(()=>{
  window.scrollTo(0, 0)
 })
  return (
    <div className="App">     
          <Navigation/>


          {props.children}
        
    </div>
  );
}

export default App;
