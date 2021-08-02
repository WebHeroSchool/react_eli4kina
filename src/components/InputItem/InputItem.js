import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class InputItem extends React.Component {

  state = {
    inputValue: '',
    errorText: '',

  };

  onButtonClick = () => {

    if(this.state.inputValue == '') {
      this.setState({errorText: "Введите не пустое значение"});
    } else {
      this.setState({
        inputValue: ''
      });
  
      this.props.onClickAdd(this.state.inputValue);
    }

  }

  render() {
    const { onClickAdd } = this.props;

    return (
      <div>
        <TextField
          error={this.state.errorText} 
          id="standard-basic" 
          label="Введи новое дело" 
          variant="filled"
          helperText={this.state.errorText}
          fullWidth
          value={this.state.inputValue}
          onChange={ event => this.setState({ inputValue: event.target.value.toUpperCase()})}
          onFocus={ event => this.setState({ errorText: '' })}

          InputProps={{
            endAdornment: (
              <IconButton  size="small" aria-label="add" onClick={this.onButtonClick}>
                <AddIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    );

  }
};

export default InputItem;
