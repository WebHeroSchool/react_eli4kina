import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const InputItem = () => (
<div>
  <TextField 
    id="standard-basic" 
    label="Введи новое дело" 
    variant="filled"
    fullWidth
    InputProps={{
      endAdornment: (
        <IconButton  size="small" aria-label="add">
          <AddIcon />
        </IconButton>
      ),
    }}
  />
</div>);

export default InputItem;
