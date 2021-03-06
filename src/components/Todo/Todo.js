import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

class Todo extends React.Component {
  state = {
    todoItems: [
      {
        value: 'Сделать зарядку',
        isDone: true,
        id: 1
      },
      {
        value: 'Забрать пальто из химчистки',
        isDone: false,
        id: 2
      },
      {
        value: 'Отвезти кота в вет клинику',
        isDone: false,
        id: 3
      }
    ],

    count: 3
  };

  onClickDone = id => {
    const newItemList = this.state.todoItems.map(item => {
      let newItem = { ...item };
  
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ todoItems: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: newItemList });
    this.setState({count: newItemList.length});
  }

  onClickAdd = value => {
      const newItemlist = [
        ...this.state.todoItems,
        {
          value,
          isDone: false,
          id: this.state.count + 1 
        }
      ];
      const newCount = newItemlist.length; 

      this.setState({ todoItems: newItemlist,  count: newCount});
  };

  render() {    
    return (
    <div>
      <h2 className={styles.title}>Todos</h2>
      <InputItem onClickAdd={this.onClickAdd} />
      <ItemList 
        todoItems={this.state.todoItems} 
        onClickDone={this.onClickDone} 
        onClickDelete={this.onClickDelete} />
      <Footer count={this.state.count} />
    </div>
    );
  }
};

export default Todo;
