import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem ,increaseItem,decreaseItem} from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const RemoveItem=(id)=>{
    dispatch(removeItem(id))
  }
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button onClick={()=>RemoveItem(id)} className='remove-btn'>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={()=>{dispatch(increaseItem({id}))}}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={()=>{
          if(amount===1)
          {
            dispatch(removeItem(id));
            
          }
          else{
            dispatch(decreaseItem({id}))
          }
         }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;