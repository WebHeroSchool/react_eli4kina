import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
<div>
<TextField 
  id="filled-search" 
  label="Введи новое дело" 
  type="search" 
  variant="filled"
  fullWidth
  />
</div>);

export default InputItem;
