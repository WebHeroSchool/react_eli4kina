import React from 'react';
const Item = ( {todoItems} ) => (
  <ol>
    <li>{todoItems[0]}</li>
    <li>{todoItems[1]}</li>
    <li>{todoItems[2]}</li>
  </ol>
);
export default Item;
