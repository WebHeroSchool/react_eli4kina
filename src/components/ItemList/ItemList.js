import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem} ) => (
<div>
  <Item todoItems = {todoItem} />
</div>
);
export default ItemList;
