import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const InputItem = ({ onClickAdd }) => {

  const initialState = {
    inputValue: '',
    errorText: '',
    hasError: false
  };

  const [inputValue,  setInputValue] = useState(initialState.inputValue);
  const [errorText,  setErrorText] = useState(initialState.errorText);
  const [hasError,  setHasError] = useState(initialState.hasError);

  const onButtonClick = () => {

    if(inputValue === '') {
      setErrorText("Введите не пустое значение");
      setHasError(true);
    } else {
      setInputValue('');
      onClickAdd(inputValue);
    }
  }

  useEffect (() => {
    console.log(`длинна введеной строки = ${ inputValue.length }`)
  }, [inputValue]);

  return (
    <div>
      <TextField
        error={ hasError } 
        id="standard-basic" 
        label="Введи новое дело" 
        variant="filled"
        helperText={ errorText }
        fullWidth
        value={ inputValue  }
        onChange={ event => setInputValue(event.target.value.toUpperCase())}
        onFocus={ event => (setErrorText(''), setHasError(false)) }

        InputProps={{
          endAdornment: (
            <IconButton  size="small" aria-label="add" onClick={ onButtonClick }>
              <AddIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  )
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default InputItem;
