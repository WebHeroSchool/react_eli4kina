import React from 'react';
import './Footer.css';

const Footer = ( {count} ) => (
  <footer className="footer">
  <div> {count} items left</div>
  <button className="footer__btn">All</button>
  <button className="footer__btn">Active</button>
  <button className="footer__btn">Completed</button>
  <button className="footer__btn">Clear completed</button>
</footer>	
);

export default Footer;
