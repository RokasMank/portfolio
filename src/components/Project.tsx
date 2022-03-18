
import { IProject } from "../Interfaces";

 const Project : React.FC<IProject> = (props)  =>{

    return(
        <div className="card projectCard" >
        <img className="card-img-top projectImageSize" src= {props.image} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title biggerFont">{props.title}</h5>
        <hr className='lightHR'/>
          <p className="card-text">{props.description}</p>
          <button type="button" className="btn btn-light m-2 projectButton"><a className='link blackFont' href={props.link} target="_blank">To project! </a></button> 

          <div className='toolsUsedContainer'>
            <div className = 'tools'>
            {props.tools.map((tool:string)=>(
              <span className = 'mr-3'>{tool}</span>
            ))}
            </div>
          </div>
        </div>
      </div>
    )

}


export default Project;