import { useEffect } from "react"
import Project from "../components/Project"
import { IProject } from "../Interfaces"
import data from './data/data.json'
export default function Work(){
  
    return(
          
        <div className='container-fluid pt-4 pb-4'> 
        <section>
            <h3>
            This page contains all of my projects
            </h3>

        </section>
        <hr/>

        {/* <div className='bigSlimText'>
            All my work
        </div> */}
        <div className='projectsList'>
            {data.projects.map((project:IProject)=>(
                
                   <Project
                   title = {project.title.toString()}
                   description = {project.description}
                   link={  "https://" + project.link}
                   image={window.location.origin +   project.image}
                    tools = {project.tools}
                    
                   />

            ))}

</div>
        {/* <Project
        title ="bitch"
        description =" blababaalla"
        link="llll"
        image= {window.location.origin +   "/man.png"}
        
        />

<Project
        title ="bitch"
        description =" blababaalla"
        link="llll"
        image= {window.location.origin +   "/man.png"}
        
        />
         <Project
        title ="bitch"
        description =" blababaalla"
        link="llll"
        image= {window.location.origin +   "/man.png"}
        
        /> */}
        
        
        
        </div>
    )
} 