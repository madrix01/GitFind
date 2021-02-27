import React,{ useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  const [users,setUsers]=useState(null);
  useEffect( async() =>{
   const response= await fetch('https://api.github.com/users/Harshit2929/repos');
   const data= await response.json();
   //console.log(data);
   setUsers(data);
  },[]);
  

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={users}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ margin: 'auto',
  width: '50%',
   padding: '10px'}}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Select repos you want to add" variant="outlined" />
      )}
    />
  );
}



