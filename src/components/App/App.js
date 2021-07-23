import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';



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
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Todos</h2>
    <InputItem />
    <ItemList todoItems = {todoItems} />
    <Footer count={3} />
  </div>);
}
export default App;
