import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import  styles from  './ItemList.module.css';

const ItemList = ( {todoItems, onClickDone, onClickDelete}) => (
  <ol className={styles.todoList}>
    {todoItems.map(item => 
    <li key={item.id}>
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

ItemList.propTypes = {
  todoItems: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ItemList;
