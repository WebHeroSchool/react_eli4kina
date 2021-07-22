import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = ['Сделать зарядку', 'Забрать пальто из химчистки', 'Отвезти кота в вет клинику'];

const App = () => (<div>
  <h2>todos</h2>
  <InputItem />
  <ItemList todoItem = {todoItem} />
  <Footer count={3} />
</div>);

export default App;
