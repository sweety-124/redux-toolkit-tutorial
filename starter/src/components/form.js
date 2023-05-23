import React from 'react'
import { useEffect,useState } from "react";
const Component=()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const handleChange = (setState) => (event) => {
    
      setState(event.target.value);
    };
    useEffect(()=>{
        console.log('name',name,email,phone)
    },[name,email,phone])
    return(
        <div>
        <input 
          value={name} 
          onChange={handleChange(setName)} />
        <input 
          value={email} 
          onChange={handleChange(setEmail)} />
        <input 
          value={phone} 
          onChange={handleChange(setPhone
  )}/>
      </div>
    )
      }
  
  
  export default Component;