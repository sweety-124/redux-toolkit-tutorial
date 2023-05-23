import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import Component from "./components/form";
function App() {
  const dispatch = useDispatch();
  const {cartItems}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector((store)=>store.modal);
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return(
    <main>
      {/* {
        isOpen&&
        <Modal/>
      }
      
      <Navbar/> 
      <CartContainer/> */}
      <Component/>
    </main>
  );
}
export default App;
