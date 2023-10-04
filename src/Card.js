import React from 'react';
// import { items } from './Item';
const Card = ({item1,item2}) => {
    console.log('items description',item2);
  return (
    <div className="card">
      <img
        src={item1}
        alt={item2}
        onError={(e) => {
          e.target.src = '/Images/About.png'; 
        }}
      />
      <div className="description">{item2}</div>
    </div>
  )
}

export default Card;
