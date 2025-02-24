import {CartIcon,Testing} from '../icons';
import { useSelector } from 'react-redux';
 import React from 'react'
 
 function Navbar() {
   const {amount,cartIems,total} = useSelector((store)=>store.cart)
    return (
        <>
        <Testing/>
        <nav>
        <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
            
        <CartIcon/>
        <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
        </div>
        </div>
        </div>
       
        </nav>
        </>
    )
 }
 
 export default Navbar
 