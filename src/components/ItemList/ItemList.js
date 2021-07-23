import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ( {todoItems} ) => (
  <ol className="todoList">
    {todoItems.map(item => 
    <li key={item.value}>
      <Item value={item.value} />
    </li>)}
  </ol>
);
export default ItemList;
