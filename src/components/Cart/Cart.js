import React from 'react';
import Name from '../AddName/Name';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;

    
    let total=0;
    for(const u of cart){
        if(cart.length){
            total+=u.salary;
        }
    }
    // console.log(props);
    return (
        <div className='cart'>
            <h3><small className='icon-count'>&#128507;</small> CEO Add Count: {cart.length}</h3>
            <h5>Total Cost: {total}</h5>
            <h5>{<Name 
            key={cart.id} 
            Cart={cart} />}
            </h5>
        </div>
    );
};

export default Cart;