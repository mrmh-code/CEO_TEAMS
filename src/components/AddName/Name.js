import React from 'react';
import './Name.css'
const Name = (profs) => {
    //Destructuring items in Cart Components
    const {Cart}=profs;
    const add=[""];
    for(const u of Cart){
        if(profs.Cart){
            add.push(u.name);
        }
    }

    return (
        <div className='name'>
            {
                add.map((u) => <h5 key={Math.random()}>{u}</h5>)
            }
        </div>
    );
};

export default Name;