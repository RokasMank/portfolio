import { Link } from '@reach/router';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import '../Styles.css'

function Navigation() {
  const Focuser = () =>{
 let btnContainer : HTMLElement|null = document.getElementById("navigationWrapper");
 if (btnContainer !== null){
 let buttons :  HTMLCollectionOf<Element>  = btnContainer.getElementsByClassName('nav')

 if (buttons !== null){
 for (let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener('click', function(){
      let current :HTMLCollection = document.getElementsByClassName('active');
      // if (current !== null){
     
       current[0].className = current[0].className.replace('active', "");
     
      
        buttons[i].classList.add('active')
      // // buttons[i-1].classList.remove('active')
       
      // }
    
   })
  }
}
 }
}
useEffect(()=>{
  Focuser();
 })
    return (
        <div className="navigationWrapper" id ='navigationWrapper'>
      <div  className='container-fluid border-bottom h-100' >
      <div className="row media-text-center ">
    <div className="col-sm-2 active nav ">

   
    <Link className =' linkMain link' to = '/'>
    <img className="navImage" src ={window.location.origin + "/manke_logo_transparent2.png"}/>

    
    </Link> 
  

    </div>
    <div className="col-sm-2 nav  ">
       
    <Link className='centeredText link blackFont ' to = 'About'>ABOUT</Link>
    
    </div>
    <div className="col-sm-2 nav">
    <Link className='centeredText link blackFont' to = 'Work'>WORK</Link>
    </div>

    <div className="col-sm-2 nav">
    <Link className='centeredText link blackFont' to = 'Contacts'>CONTACTS</Link>
    </div>

    <div className="col-sm-4 fl-l ">
  <div className="iconsContainerWrapper">
  <div className="iconsContainer">
 <a href="https://www.instagram.com/menkevic/" target="_blank" className='icons' >
  <img className="iconImg" src ={window.location.origin + "/igLogo.png"}/>

  </a>

  <a href="https://www.facebook.com/rokas.mankevicius" target="_blank"  className='icons'>
  <img className="iconImg" src ={window.location.origin + "/fbLogo.png"}/>
  </a>
 
  <a href="https://www.linkedin.com/in/rokas-mankevi%C4%8Dius-444921212/" target="_blank" className='icons' >
  <img className="iconImg" src ={window.location.origin + "/linkedin.png"}/>

  </a>
      
  </div>
  </div>

    </div>

    {/* <div className="col">
    <div className="centeredText">One of three columns</div>
    </div>
    <div className="col">
    <div className="centeredText">One of three columns</div>
    </div> */}
  </div>
     
           
          
      </div>
      </div>
    );
  }
  
  export default Navigation;
