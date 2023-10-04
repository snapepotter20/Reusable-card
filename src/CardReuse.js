import React from 'react';
import Card from './Card';
import {items} from './Item';

const CardReuse = () => {
  return (
    <div className="item-list">
    {items.map((item, index) => (
        <div>
            <Card key={index} item1={item.imageUrl} item2={item.description} />
        </div>
    ))}
  </div>
  )
}

export default CardReuse;
