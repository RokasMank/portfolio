import firebase from "firebase";
import { IProject } from "../Interfaces";


export const fetchData = async (type: any) => {
  
    const storageRef = firebase.storage().ref('projects/')
    
//    console.log(storageRef)
    let result = await storageRef.listAll();
  
    //   console.log(result)
        let urlPromises = result.items.map(fileRef => fileRef.getDownloadURL());
        console.log(urlPromises)
        return Promise.all(urlPromises);
  
 }

//  export const  fetchMyQuestions = async(data:any) =>{
    
//     return data.projects.map((question:IProject)=>({
//         ...question,
        
//         answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
//     }
//     ));
            
// };