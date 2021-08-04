import React from 'react';
import styles from  './Footer.module.css';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8e49e8',
    },
    secondary: {
      main: '#f04eb2',
    },
  },
});

const Footer = ( {count} ) => (
  <footer className={styles.footer}>
  <div> {count} items left</div>
  <ThemeProvider theme={theme}>
    <Button variant="outlined" color="primary" size="small">All</Button>
    <Button variant="outlined" color="primary" size="small">Active</Button>
    <Button variant="outlined" color="primary" size="small">Completed</Button>
  </ThemeProvider>
  
  <Button color="secondary" size="small">Clear completed</Button>
</footer>	
);

Footer.defaultProps = {
  count: 0
};

export default Footer;
