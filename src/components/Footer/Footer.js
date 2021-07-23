import React from 'react';
import  styles from  './Footer.module.css';

const Footer = ( {count} ) => (
  <footer className={styles.footer}>
  <div> {count} items left</div>
  <button className={styles.btn}>All</button>
  <button className={styles.btn}>Active</button>
  <button className={styles.btn}>Completed</button>
  <button className={styles.btn}>Clear completed</button>
</footer>	
);

export default Footer;
