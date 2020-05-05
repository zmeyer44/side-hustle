import React from 'react';
import CopyItem from './CopyItem';
export default function CopyList({value}) {
    const{cart,cartTotal} = value;
    
    return (

        <div className="container-fluid">
            <div id="CopyOrder">
                
                    <span>My order is:</span>
            {cart.map(item => {
                return (
                    
                <CopyItem key={item.id} item={item} value={value} />
                
                );
            })}
            <span>for a total of </span>
                <strong>$ {cartTotal}</strong>
                </div>
               
        </div>
        
    );
}
