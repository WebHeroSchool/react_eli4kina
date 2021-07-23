import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';



const App = () => {
  const todoItems = [
    {
      value: 'Сделать зарядку'
    },
    {
      value: 'Забрать пальто из химчистки'
    },
    {
      value: 'Отвезти кота в вет клинику'
    }
  ];
  
  return (
  <div>
    <h2>todos</h2>
    <InputItem />
    <ItemList todoItems = {todoItems} />
    <Footer count={3} />
  </div>);
}
export default App;
