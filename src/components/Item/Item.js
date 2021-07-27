import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Item = ( {value, isDone} ) => (
  <div className={styles.itemBlock}>
    <span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
    {value}
    </span>
    <IconButton aria-label="delete" >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
  </div>

);
export default Item;
