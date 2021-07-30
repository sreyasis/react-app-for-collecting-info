import React from 'react'
import {Link} from 'react-router-dom'
const Table = (props)=>{
    const { id, name, email } = props.Info; //destructuring for ease of use
    return(
          
         <tr>
             
             <td >{name}</td>
            <td>{email}</td>    
            <td>
             <Link to={{pathname:`/edit`, state: {Info: props.Info}}}>   <i 
            className="edit alternate outline icon" 
            style={{color: "white"}}
            

             ></i> </Link>
             <i className="trash alternate outline icon"
             style={{color: "red", cursor:"pointer"}}
             onClick={()=>props.ClickHandler(id)}></i></td>
            </tr>
     
    );
}
export default Table