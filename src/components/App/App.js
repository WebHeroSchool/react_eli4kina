import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';



const App =  () => (
     <Router>
        <div>
          <Paper className={styles.menu}>
          <MenuList id="simple-menu">
            <Link to ='/'><MenuItem className={styles.item} >Обо Мне</MenuItem></Link> 
            <Link to ='/contacts'><MenuItem className={styles.item} >Контакты</MenuItem></Link> 
            <Link to ='/todo'><MenuItem className={styles.item} >Мои дела</MenuItem></Link>
          </MenuList>
          </Paper>

          <div className={styles.wrapper}>
            <Route path='/' exact component={About} />
            <Route path='/contacts' exact component={Contacts} />
            <Route path='/todo' exact component={Todo} />
          </div>
        </div>
     </Router> 
  
);

export default App;
