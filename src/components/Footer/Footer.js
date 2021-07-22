import React from 'react';
import ReactDOM from 'react-dom';

let count=3;
const Footer = () => (
  <footer>
  <div> {count} items left</div>
  <button>All</button>
  <button>Active</button>
  <button>Completed</button>
  <button>Clear completed</button>
</footer>	
);

export default Footer;
