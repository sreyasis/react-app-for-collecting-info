import React,{ useState, useEffect} from 'react'
import Header from './header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {v4 as uuid} from 'uuid' // for generating id
import AddInfo from './addInfo'
import InfoList from './infoList'
import './App.css';
import api from '../api/info' //for storing data inside json file
import EditInfo from './editInfo'

function App() {
  //defining state
  const [info, setInfo]= useState([]);
  //retrieve info
  const retrieveInfo = async () => {
    const response = await api.get("/info");
    return response.data;
  }


  // recieve info from AddInfo component and update state
  const recieveInfo = async (recievedInfo) =>{
    const request = {
      id: uuid(),   // using UUID to generate id
      ...recievedInfo
    }
    const response = await api.post("/info", request)
    setInfo([...info, response.data]); 
    
  };


  // Function to update state after editing using prop recieved from editInfo component
  const updateInfo = async (recievedInfo)=>
  {
    const editresponse = await api.put(`/info/${recievedInfo.id}`, recievedInfo);
   
    const {id, name, email} = editresponse.data
    setInfo(info.map(recievedInfo=>{
      return recievedInfo.id === id ? {...editresponse.data} : recievedInfo;
    }) )    
  }



  // Function to delete component by using id returned by InfoList
  const  removeInfo = async (id) => {
    await api.delete(`/info/${id}`);
    const newInfoList = info.filter((recievedInfo)=>{
      return recievedInfo.id !== id;
    });
    setInfo(newInfoList);
  }


  //to retrive data from json using axio
  useEffect(()=>{
    const getAllInfo = async ()=>{
      const allInfo =  await retrieveInfo();
      if(allInfo) setInfo(allInfo);
    }
    getAllInfo();
    
  },[]);

  
 // adding routes and passing props
  return (
    <div >
      <Router>
      <Header />
      <Switch>
      
      <Route path="/" 
        exact 
        render={(props)=>(<InfoList 
        {...props} 
        sample={info} 
        getDeleteInfoId={removeInfo} 
        />)}
      />
      <Route 
          path="/add" 
          render={(props)=>(<AddInfo 
          {...props}
          recieveInfo={recieveInfo} 
          />
      )} 
      />
      <Route 
          path="/edit" 
          render={(props)=>(<EditInfo 
          {...props}
          updateInfo={updateInfo} 
          />
      )} 
      />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
