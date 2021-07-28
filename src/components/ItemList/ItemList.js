import React from 'react';
import Item from '../Item/Item';
import  styles from  './ItemList.module.css';

const ItemList = ( {todoItems, onClickDone}) => (
  <ol className={styles.todoList}>
    {todoItems.map(item => 
    <li key={item.value}>
      <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
    </li>)}
  </ol>
);
export default ItemList;
