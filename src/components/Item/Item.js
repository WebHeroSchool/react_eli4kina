import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import classnames from 'classnames';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends React.Component{

  componentDidMount() {
    this.timerId = setInterval(() => console.log('Компонент с id = ', this.props.id), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {value, isDone, id, onClickDone, onClickDelete } = this.props;

    return (
      <div>
      <Checkbox 
        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        color="primary"
        checked={isDone}
        tabIndex={-1}
        onClick={() => onClickDone(id)}
      />
      <span 
        className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
        {value}
      </span>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" edge="end" onClick={() => onClickDelete(id)}>
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
  
    </div>
    );
  };
}

Item.defaultProps = {
  value: 'Задача отсутствует',
  isDone: false
};

Item.propTypes = {
  value: PropTypes.string,
  isDone: PropTypes.bool,
  id: PropTypes.number,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Item;
