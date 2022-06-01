import React from 'react';
import './Ceo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Ceo = (profs) => {
    const {name,img,role,Age,salary,country}=profs.CeoList;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    // console.log(profs);
 

    
    return (
        <div className='list-of-ceo'>
            <div className='card'>

                <img src={img} alt="" />
                <p><strong>Name: </strong> {name}</p>
                <p><strong>Role: </strong> {role}</p>
                <p><strong>Age: </strong> {Age}</p>
                <p><strong>Country: </strong> {country}</p>
                <p><strong>Salary: </strong> {salary}</p>
                <button onClick={()=>profs.handleSalary(profs.CeoList)}>{element} add to cart</button>
                <p><i className="fa fa-linkedin-square"></i> <i className="fa fa-twitter"></i></p>

            </div>    



            {/* icon cdn link  */}
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </div>
    );
};

export default Ceo;