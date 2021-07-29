import React from 'react';
import Item from '../Item/Item';
import  styles from  './ItemList.module.css';

const ItemList = ( {todoItems, onClickDone, onClickDelete}) => (
  <ol className={styles.todoList}>
    {todoItems.map(item => 
    <li key={item.value}>
      <Item 
        value={item.value} 
        isDone={item.isDone} 
        id={item.id} 
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
       />
    </li>)}
  </ol>
);
export default ItemList;
