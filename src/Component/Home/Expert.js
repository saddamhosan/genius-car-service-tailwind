import React from 'react';

const Expert = ({expert}) => {
    const {name,img}=expert
    return (
        <div>
            <img className='w-full' src={img} alt="" />
            <h3 className='text-center'>{name}</h3>
        </div>
    );
};

export default Expert;