import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from './Expert';

const experts=[
    {"id":1,"name":"solim","img":expert1},
    {"id":2,"name":"kolim","img":expert2},
    {"id":3,"name":"rohim","img":expert3},
    {"id":4,"name":"kalek","img":expert4},
    {"id":5,"name":"malek","img":expert5},
    {"id":6,"name":"sokina","img":expert6},
]

const Experts = () => {
    
    return (
      <div>
        <h1 className="text-center text-blue-600 text-3xl font-bold mb-5 mt-20">
          Our experts
        </h1>
        <div className="grid md:grid-cols-3 gap-4 m-4">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    );
};

export default Experts;