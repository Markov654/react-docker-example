//Greate react component with Hook useEffect and Hook useState
import React, { useEffect, useState } from "react"
import './App.css';


function FetchData() {
  const [name,setName] = useState([]);

  useEffect(()=>{
    names()
  },[])
   // Fetch data
  const names = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users/');

    setName(await responce.json())
  }
  // export data with JSX map metod with to parameters
  // access object
  return(
    <div>
     
      <ol>
      
        {name.map((data, index )=> {
          return(

            <div className="mql">
              
             <li  key={index}><b>Name:</b> {data.name} </li>
             <li  key={index}><b>UserName:</b>  {data.username}</li>
             <li  key={index}><b>Email:</b>  {data.email}</li>
             <li  key={index}><b>Street:</b>  {data.address.street}</li>
             <li  key={index}><b>Suite:</b>  {data.address.suite}</li>
             <li  key={index}><b>City:</b>  {data.address.city}</li>
             <li  key={index}><b>Zipcode:</b>  {data.address.zipcode}</li>
             
             <li  key={index}> <b>Geo lat:</b> {data.address.geo.lat}</li>
             <li  key={index}><b>Geo Lng:</b>  {data.address.geo.lng}</li>
             <li  key={index}><b>Phone:</b>  {data.phone}</li>
             <li  key={index}><b>Website:</b>  {data.website}</li>
             <li  key={index}> <b>Company Name:</b> {data.company.name}</li>
             <li  key={index}><b>CatchPhrase:</b>  {data.company.catchPhrase}</li>
             <li  key={index}> <b>CompanyBs:</b> {data.company.bs}</li><br></br>
             
                 </div>                                          
           
           
         
          
          )
        })}
      </ol>
    </div>
  )

}

export default FetchData;