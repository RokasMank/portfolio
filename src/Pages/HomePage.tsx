import { Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
 import {Card} from 'react-bootstrap'
 

 const HomePage = () =>{
    // var h =  document.getElementById('navigationWrapper')?.clientHeight
    //  console.log(h)
    return(
        <div className='pageWrapper' id='pageWrapper'>

       
 
            <div className="row">
   
    <div className="col-lg-4">
    <img className="homePageImg" src ={window.location.origin + "/workingMan.png"}/>
    </div>
    <div className="col-lg-8 ">
   
   <div className='homePageCard bigSlimText'>
     Hey, I am <strong>Rokas</strong>, welcome to my web page. Explore this page and get to know me more!  
      
     
     </div>
     
 
     
</div>
  </div>
  <hr/>
  <div className="row">
   
    <div className="col-lg-8">
    <div className='homePageCard2 bigSlimText'>
          
           
      I am looking for an <strong>internship</strong> or a <strong>job</strong> as a web developer.</div>
      
    </div>
    <div className="col-lg-4">
      <div className='identityHomePageWrapper'>
      <div className='identityHomePage'>

      <img className="smallImageSize" src ={window.location.origin + "/coding1.png"}/> <br/>

      <strong>Rokas M</strong>, computer science student at <strong>KTU</strong>
   
    <div className="">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-envelope smallImageSize2" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : <strong>rokismank@gmail.com</strong>
                </div>
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-phone smallImageSize2" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> : <strong>+37062538123</strong> <br/>
<img className="smallImageSize" src ={window.location.origin + "/coding1.png"}/>
</div>
    </div>
    </div>

    
    
    </div>
  
  </div>

           
        </div>
        
    )
} 
export default HomePage;