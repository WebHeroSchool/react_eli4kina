import React from 'react';
import Item from '../Item/Item';
import  styles from  './ItemList.module.css';

const ItemList = ( {todoItems} ) => (
  <ol className={styles.todoList}>
    {todoItems.map(item => 
    <li key={item.value}>
      <Item value={item.value} />
    </li>)}
  </ol>
);
export default ItemList;
