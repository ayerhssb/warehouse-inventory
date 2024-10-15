import React from 'react'
import axios from "axios";
import { useEffect,useState } from 'react';

const Apitest = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/api/items")
    .then((res)=> setMyData(res.data))
    .catch((error)=> setIsError(error.message))
  },[]);
  return (
    <>
      <h1>API Test</h1>
      {isError !== " " && <h2>{isError}</h2> }
      {myData.slice(0,12).map((post) => {
        const{_id, name, quantity,category} = post;
        return(
          <div className='card' key={_id}> 
            <p>quantity: {quantity}</p>
            <p>name: {name}</p>
            <p>category: {category}</p>
            <hr/>
          </div>
        );
      })}
    </>
  )
}

export default Apitest


