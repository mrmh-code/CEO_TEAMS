import React from 'react';
import { useEffect,useState } from "react";
import Cart from '../Cart/Cart';
import Ceo from '../CEO/Ceo';
import './Main.css'

const Main = () => {
    const [ceoList,setCeoList]=useState([]);
    useEffect(() => {
        document.title = "CEO TEAMS"
     }, []);

    useEffect(() =>{
        fetch('../../tools.JSON')
        .then(res => res.json())
        .then(data => setCeoList(data));
    }, [])


    const [cart,setCart]=useState([])
    const handleSalary=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }

    return (
        <div className='main-container'>
          
            <div className='ceo-list'>
            {
                ceoList.map(ceo => <Ceo
                    key={ceo.id}
                    CeoList={ceo}
                    handleSalary={handleSalary}
                />)
            }

            </div>


            <div className='cart-section'>
                <Cart cart={cart}/>
            </div>

        </div>
    );
};

export default Main;