import React from 'react'
import Table from './infoTable'
import {Link} from 'react-router-dom'

const InfoList=(props)=>{
    
    //function to pass id of the element to be deleted
    const deleteInfo = (id)=>{
        
        props.getDeleteInfoId(id);
    }

    //mapping function to loop through passed entities
    const renderInfoList= props.sample.map((Info)=>{
        
        return(
            <Table Info={Info} ClickHandler={deleteInfo} key={Info.id} />
            
        );
           
            
    
    })

    return(
        //rendering table with table head , table rows will be passed by infoTables component
        <div className="ui centered grid">
        <h2>Student List</h2>
        <Link to="/add"><div className="buttoncontainer">
        <button className="ui button blue">Add Details</button></div>
        </Link>
       
        <table className="table table-bordered table-dark">
          <thead >
              <tr >
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Edit/delete Entity</th>
              </tr>
          </thead>
         <tbody>
                      {/* passing each entity  */}
             {renderInfoList} 
             
        </tbody> 
        </table>
    </div>
    );
}
export default InfoList