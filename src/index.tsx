import { RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Work from './Pages/Work';
import Contacts from './Pages/Contacts';
const RouterPage = (props : {pageComponent: JSX.Element} & RouteComponentProps) =>props.pageComponent

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App path = '/' >
        <RouterPage  pageComponent ={<HomePage/>} path='/'/> 
        <RouterPage  pageComponent ={<About/>} path='About'/> 
        <RouterPage  pageComponent ={<Work/>} path='Work'/> 
        <RouterPage  pageComponent ={<Contacts/>} path='Contacts'/> 
        
        </App>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
