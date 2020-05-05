import React from 'react'

export default function CopyItem({item,value}) {
    const{id,title,price,total,count} = item;
    

    return (
        <div className="row my-2 text-capitalize text-center">
                {count}<span>-</span>{title}
            </div>
            
    );
}
