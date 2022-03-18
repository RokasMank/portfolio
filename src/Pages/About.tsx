

export default function About(){
    return(
        <div className='pageWrapper'>


<div className="container-fluid">
   
  <div className="row">
    <div className="col-md-6">
    <img className="aboutPageImg" src ={window.location.origin + "/man.png"}/>

    </div>
  
    
    <div className="col-md-6">
      
    <div className='aboutPageCard '>
      <h3>About me</h3>
      <hr/>
      <p>
    Hey, I am Rokas Mankevičius. I was born in Lithuania, on the 15th of September, 2001. I am studying software systems at Kaunas University of Technology.
  
 
             </p>
    </div>
    <div className='aboutPageCard '>
      <h3>Skills</h3>
      <hr/>
      <p>
   
      I focus on web development, but I am open to other technologies too. I have knowledge in CSS, Typescript, React, HTML, Java, C#. 
    I understand main data structures like hash tables, linked lists, binary search trees, etc.
    
   
             </p>
    </div>
    <div className='aboutPageCard '>
      <h3>Status</h3>
      <hr/>
      <p>
   
    Currently I have no web developer experience but <strong>hopefully </strong> this will change soon. I am open for any kind of internship
    or job offers. I am willing to put a great amount of time and energy in exchange for experience and knowledge.

             </p>
    </div>
   
    </div>
  </div>
</div>

        </div>
    )
} 